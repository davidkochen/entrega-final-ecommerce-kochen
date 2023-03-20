import destacado1 from "./img/destacado1.jpg";

const Destacados = () =>{
    return(
         <div className="container-fluid  bg-dark my-3">
            <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={destacado1} alt={"destacado1"} width={300} />
                        </div>
                        <div className="col-md-8 d-flex align-items-center justify-content-end">
                        <button className="btn btn-light">Comprar ahora</button>
                    </div>
                    </div>
                   
                </div>
            </div>
            </div>
            
         </div>
    )
}

export default Destacados;