import { useDebugValue } from "react"

export function CartReducer(state,action){
//state representa el estado anterior, y action la accion para cambiar de estado
console.log(state.carrito)
console.log(state)
    switch(action.type){

        case 'ADD_CARD':

            return{
            ...state,    
            total: state.total+1,
            pokemon:action.payload.pokemon,
            carrito:state.carrito.push(action.payload.pokemon)
        }
        
        case 'SUB_CARD':
            //estaEnCarrito(action.payload.pokemon, action.payload.carrito)  ? console.log('true') : console.log('false')
            console.log(state.total)
            return{
                ...state,
                total: state.total>0 ? state.total-1 : 0,
                pokemon:action.payload.pokemon,
                carrito:state.carrito.push(action.payload.pokemon)
            }
        default:
            break
    }


}
/*
function estaEnCarrito(pokemon, carrito){
    carrito.map((poke,index)=>{
        if (pokemon.id == poke.pokemon.id){
            console.log('esta en carrito')           
        }
        else{
            console.log('no esta en carrito')
        }
    }
    )
}*/