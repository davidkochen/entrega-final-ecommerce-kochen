import logo from "./img/logo.png";

const Error404 = () =>{
    return(
        <div className="container">
            <div className="row text-center">
                <div className="col">
                <p><img src = {logo} alt ="PokeShop" width={"108"}/></p>
                <h1>Error404</h1>
                </div>
            </div>           
        </div>
       
    )
}

export default Error404;