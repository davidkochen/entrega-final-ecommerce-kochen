import { CartContext } from "./context/CartContext";
import {useContext} from "react"
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return(
            <div className="container">
                <div className="row">
                    <div className="col-6 d-flex align-items-center justify-content-end">
                        <img src={item.imagen} alt={item.nombre} />
                    </div>
                    <div className="col d-flex align-items-center ">
                        <div>
                            <h1>{item.nombre}</h1>
                            <h4><b>${item.precio}</b></h4>
                            <p>{item.descripcion}</p>
                            <h5><b>{item.categoria}</b></h5>
                            <ItemCount stock={item.stock} onAdd ={onAdd} />
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail;