import Items from '../Items/Items'
import './ItemList.css';


function ItemList({productos}) {
    return (
        <div className="flexItems">
              {
                    productos.map( prod => 
                        <Items 
                            key={prod.id} 
                            prod={prod} 
                        />
                    )
                }
        </div>
    )
}

export default ItemList
