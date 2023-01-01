//creo la componente basado en funcion
//se usan proptyps que viene de manera nativa en React
import { useContext } from "react"
import pokebola from "../icons/pokebola.svg"
import './PokeWidget.css'
import { CartContext } from "../../contexts/CartContext"
const PokeWidget = ()=>{
    const {total} = useContext(CartContext)
    return (
        <div>
            <a href="/carrito" className = 'pokeWidget'><img src={pokebola} alt="" /><p>({total})</p></a>
        </div>

    )
}

export default PokeWidget;