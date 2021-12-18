import { createContext, useState, useContext } from "react"

export function useCartContext() {
    return (
        useContext(CartContext)
    )
} 

export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function addItem (item) {

        const index = cartList.findIndex(i => i.id === item.id)//pos    -1
  
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

    const cartSpan = cartList.length

    const cartTotal = cartList.reduce( (acc, item) => acc = acc + (item.precio * item.cantidad), 0)

    return (
        <CartContext.Provider value={{cartList, 
                                    setCartList,   
                                    addItem,
                                    removeItem,
                                    emptyCart,
                                    cartSpan,
                                    cartTotal }}>
            {children}
        </CartContext.Provider>
    )
}