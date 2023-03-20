import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import carrito from "./img/cart-fill.svg"

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return (cartTotal() > 0) ?
        <Link to={"/cart"} className="btn btn-light p-3 position-relative ">
            <img src={carrito} alt={"carrito"} width={24}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartTotal()}
            </span>
            </Link> : "";
    
}

export default CartWidget;