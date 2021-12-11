import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import {getItems} from "../getItems"
import Spinner from "react-bootstrap/Spinner"
import "./ItemListContainer.css"
import Main from '../Bootstrap/Main'




function ItemListContainer() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            getItems
            .then(res => setProducts(res))
            .catch(err => console.log("Error: " + err))
            .finally(setLoading(false))
        
            
        }, 1500);
        
        
    },[])

    console.log(loading)
    return (
        <div>
            <Main></Main>   
            <div className='container-xxl text-center styleILC'>
                {   
                    loading ? 
                    <div className="m-2">
                        <h2><Spinner animation="border" variant="success" />Cargando</h2>
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
