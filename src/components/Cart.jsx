import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import trash from "./img/trash3.svg";

const Cart = () => {

    const {cart, clear, removeItem, cartTotal, cartSum} = useContext (CartContext);


    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className ="alert alert-warning text-center" role="alert">
                             No se encontraron productos en el carrito.                    
                        </div>
                    </div>
                </div>
            </div>

        )
    }


   return (
        <div className="container my-5">
            <div className="row">
            <h1 className="text-center">Productos seleccionados</h1>
            
                <div className="col-md-12">
                    
                    <table className="table">
                        <tr>
                            <td className="text-end" colSpan={5}><Link type="button" className="btn btn-light" onClick={() => {clear()}}>Vaciar carrito</Link></td>
                        </tr>
                        {
                            cart.map(item => (
                                <tr key={item.index}>
                                    <td className="text-start" width="10%" ><img src={item.imagen} alt={item.nombre} width={120}/></td>
                                    <td className="text-start align-middle" width="30%" >{item.nombre}</td>
                                    <td className="text-center align-middle" width="20%" >{item.quantity} x ${item.precio}</td>
                                    <td className="text-center align-middle" width="20%" >${item.quantity * item.precio}</td>
                                    <td className="text-end align-middle" width="20%" >< Link type="button" className="btn btn-outline-light" onClick={() => {removeItem(item.index)}} title={"Eliminar producto"}> <img src={trash} alt={"Eliminar producto"} width={32}/></Link></td>
                                </tr>
                                
                            ))
                        }
                        <tr>
                            <td colSpan={2}>&nbsp;</td>
                            <td className="text-center">Total a pagar</td>
                            <td className="text-center"><b>${cartSum()}</b></td>
                            <td className="text-end"><Link to={"/checkout"} type="button" className="btn btn-light">Finalizar Compra</Link></td>
                        </tr>
                    </table>

                </div>
            </div>
            
        </div>
    ) 
}

export default Cart;