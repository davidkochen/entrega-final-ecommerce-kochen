import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";
import instagram from "./img/instagram.svg";
import descuento from "./img/descuento.jpg";
import logo from "./img/logo.png";

const Footer = () =>{
    return(
        <div className="container my-5">
            <div className="row ">
                <div className="col-md-8 ">
                    <a href={"/"} className ="me-3" ><img src={facebook} alt={"facebook"} width={"24"}/></a>
                    <a href={"/"} className ="me-3" ><img src={twitter} alt={"twitter"} width={"24"}/></a>
                    <a href={"/"} className ="me-3" ><img src={instagram} alt={"instagram"} width={"24"}/></a>
                </div> 
                
                    <div className="col-md-4 text-end">
                        <img src={descuento} alt={"descuento"} />
                    </div>
            </div>
            <hr />
            <div className="row my-2">
                <div className="col bg-light">
                <ul className="nav ">
                    <li className="nav-item">
                        <a className="nav-link active text-dark" href={"/"} >Politica de Privacidad </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href={"/"}>Defensa al Consumidor</a>
                     </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href={"/"}>Proteccion de datos personales</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href={"/"}>Contacto</a>
                    </li>
                    </ul>
                </div>
                <div className="col-md-4 bg-light text-end">
                    <p><img src={logo} alt={"logo"} width={"40"} /> © Poke Shop 2023</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;