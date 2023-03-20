const Loading = () => {
    return(
        <div className="conatainer my-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Cargando...</h1>
                    <div class="spinner-grow text-secondary" role="status">
                        <span class="visually-hidden">Cargando...</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Loading; 