import { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

//exportar la constante que indica el contexto de manera global
export const CartContext = createContext(null)

//el estado inical del objeto
const initialState = {
    total : 0,
    pokemon:{},
    carrito:[]
}

export const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer,initialState)

    //funcion para disparar el guardado del estado global y modificarlo en suma
    function addPokemon(pokemon){
        dispatch({
            type:'ADD_CARD',
            payload:{pokemon}
        })
    }
    function subPokemon(pokemon){
        dispatch({
            type:'SUB_CARD',
            payload:{pokemon}
        })
    }
    return(
        <CartContext.Provider
        value={{
            total:state.total,
            pokemon:state.pokemon,
            carrito:state.carrito,
            addPokemon,
            subPokemon
        }}>
        {children}
        </CartContext.Provider>
    )
}

