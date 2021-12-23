import ItemList from '../ItemList/ItemList'
import Spinner from "react-bootstrap/Spinner"
import Main from '../Bootstrap/Main'
import "./ItemListContainer.css"

/* HOOKS */
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFireStore } from '../../services/getFireStore'



function ItemListContainer() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryID} = useParams()

    useEffect(() => {
        const fStoreData = getFireStore()

        if (categoryID) {
            
            fStoreData.collection("items").where("type", "==", categoryID).get()
            .then(res => setProducts( res.docs.map( prod => ({id: prod.id, ...prod.data()} )) ))
            .catch(err => console.log(err))
            .finally(setLoading(false))
        } else {
            fStoreData.collection("items").get()
            .then(res => setProducts( res.docs.map( prod => ( {id:prod.id, ...prod.data()} ) ) ))
            .catch(err => console.log(err))
            .finally(setTimeout(() => {
                setLoading(false) 
            }, 100)  )
            
        }
        
    },[categoryID])

    return (
        <div>
            <Main></Main>   
            <div className='container-xxl text-center styleILC'>
                {   
                    loading ? 
                    <div className="m-2">
                        <h2><Spinner animation="border" variant="success" />Loading...</h2>
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
