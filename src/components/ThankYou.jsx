import { Link, useParams } from "react-router-dom";

const ThankYou = () => {
    const {orderId} = useParams();

    return (
        <div className="conatiner my-5">
             <div className="row">
                <div className="col-md-12 text-center">
                    {orderId ? <div class="alert alert-dark text-center" role="alert">
                    <h3>Gracias por tu compra</h3><p>Se realizó una orden de compra con el ID: <b>{orderId}</b></p></div>: ""}
                    <Link to={"/"} class="btn btn-light">Volver al menú principal</Link>
                </div>
            </div>
        </div>

    )
}

export default ThankYou; 