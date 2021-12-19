import { createContext, useState, useContext } from "react"



const CartContext = createContext([])

export function useCartContext() {
    return (
        useContext(CartContext)
    )
} 


export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function addItem (item) {

        const index = cartList.findIndex(i => i.id === item.id)
  
        if (index > -1) {
          const oldQy = cartList[index].cantidad

          cartList.splice(index, 1)
          setCartList([...cartList, { ...item, cantidad: item.cantidad + oldQy}])
        } else {
          setCartList([...cartList, {...item, cantidad: item.cantidad}])
        }

    }
    
    function removeItem (item) {
        const index = cartList.findIndex(i => i.id === item.id)
        console.log(index)
        console.log(item)
        
        if (index > -1) {
            const newItem = {...item, cantidad: item.cantidad - 1}

            
            if (item.cantidad > 1) {
                cartList.splice(index, 1);
                
                setCartList([...cartList, newItem])
            } else {
                setCartList(cartList.filter((i) => i.id !== item.id));
            }
            console.log(newItem)
            
        } else {
            setCartList([...cartList])
        }

    }
    
    function emptyCart () {
        setCartList([])
    }


    const cartSpan = cartList.reduce((acum, item) => acum + item.cantidad, 0)

    const cartTotal = cartList.reduce( (acc, item) => acc = acc + (item.precio * item.cantidad), 0)

    function getOrder() {
        const order = {}

        order.buyer = {name:"Fede", email:"j@gmail.com", cellphone:12312312}
        order.items = cartList.map( item => {
            const id = item.id
            const name = item.nombre
            const price = item.precio * item.cantidad
            return {id, name, price}
        } )
        order.total = cartTotal

        console.log(order)
    }

    return (
        <CartContext.Provider value={{cartList, 
                                    setCartList,   
                                    addItem,
                                    removeItem,
                                    emptyCart,
                                    cartSpan,
                                    cartTotal,
                                    getOrder }}>
            {children}
        </CartContext.Provider>
    )
}