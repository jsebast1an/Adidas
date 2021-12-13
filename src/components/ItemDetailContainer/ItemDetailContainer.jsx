import getItems from "../getItems"
import {useState, useEffect} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"



function ItemDetailContainer() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getItems
        .then(res => setProducts(res) )
        .catch(err => console.log(err))
        .finally(setLoading(false))

    }, [])

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
