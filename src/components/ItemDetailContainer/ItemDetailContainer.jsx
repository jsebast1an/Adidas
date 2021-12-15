import getItems from "../getItems"
import ItemDetail from "../ItemDetail/ItemDetail"

/* HOOKS */
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
 


function ItemDetailContainer() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {detailID} = useParams()

    useEffect(() => {

        if (detailID) {

            getItems
            .then(res => setProducts(res.find(prod => prod.id === parseInt(detailID)  )) )
            .catch(err => console.log(err))
            .finally(setLoading(false))

        } else {

            getItems
            .then(res => setProducts(res) )
            .catch(err => console.log(err))
            .finally(setLoading(false))
            
        }

    }, [detailID])

    console.log(products)

    

    return (
        <div>
            { loading ? <div className="text-center">
            <               h2> Cargando </h2>
                        </div> :
                    <ItemDetail
                        item={products}
                    />
            }
        </div>
    )
}

export default ItemDetailContainer
