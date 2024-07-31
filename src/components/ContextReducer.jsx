import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD" :
            return(
                [
                    ...state, 
                    {
                        id: action.id,
                        name: action.name,
                        quantity: action.quantity,
                        size: action.size,
                        price: action.price,
                        img: action.img
                    }
                ]
            ) 
        case "REMOVE" : 
            let tmp = [...state]
            tmp.splice(action.index, 1)
            return tmp
        default :
            alert ("Error in reducer")
    }
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, []);
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                { children }
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )

}

export default CartProvider;
export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);