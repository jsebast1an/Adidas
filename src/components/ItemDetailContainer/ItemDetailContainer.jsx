import ItemDetail from "../ItemDetail/ItemDetail"

/* HOOKS */
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import { getFireStore } from "../../services/getFireStore"
 


function ItemDetailContainer() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {detailID} = useParams()

    useEffect(() => {

        const fStoreData = getFireStore()

            fStoreData.collection("items").doc(detailID).get()
            .then(res => setProducts({id: res.id, ...res.data()}))
            .finally(setLoading(false))

    }, [detailID])

    console.log(products)

    

    return (
        <div>
            { loading ? <div className="text-center">
            <               h2> Loading... </h2>
                        </div> :
                    <ItemDetail
                        item={products}
                    />
            }
        </div>
    )
}

export default ItemDetailContainer
