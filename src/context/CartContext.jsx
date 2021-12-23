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
        setCartList(cartList.filter((i) => i.id !== item))
    }
    
    function emptyCart () {
        setCartList([])
    }


    const cartSpan = cartList.reduce((acum, item) => acum + item.cantidad, 0)

    const cartTotal = cartList.reduce( (acc, item) => acc = acc + (item.precio * item.cantidad), 0)


    return (
        <CartContext.Provider value={{cartList, 
                                    setCartList,   
                                    addItem,
                                    removeItem,
                                    emptyCart,
                                    cartSpan,
                                    cartTotal,
                                    }}>
            {children}
        </CartContext.Provider>
    )
}