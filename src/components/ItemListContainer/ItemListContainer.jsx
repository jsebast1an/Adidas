import ItemList from '../ItemList/ItemList'
import {getItems} from "../getItems"
import Spinner from "react-bootstrap/Spinner"
import "./ItemListContainer.css"
import Main from '../Bootstrap/Main'

/* HOOKS */
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'



function ItemListContainer() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryID} = useParams()

    useEffect(() => {
            if (categoryID) {

                getItems
                .then(res => setProducts(res.filter(prod => prod.type === categoryID)))
                .catch(err => console.log("Error: " + err))
                .finally(setLoading(false))
                
            } else {
                getItems
                .then(res => setProducts(res))
                .catch(err => console.log("Error: " + err))
                .finally(setLoading(false))
                
            }
        
    },[categoryID])

    return (
        <div>
            <Main></Main>   
            <div className='container-xxl text-center styleILC'>
                {   
                    loading ? 
                    <div className="m-2">
                        <h2><Spinner animation="border" variant="success" />Loading</h2>
                    </div> :

                    <div>
                        
                        <ItemList productos={products}></ItemList>
                    </div>
                }
            </div>

        </div>
    )
}

export default ItemListContainer
