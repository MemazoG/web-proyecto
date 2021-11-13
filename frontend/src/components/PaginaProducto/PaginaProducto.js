import Apple from './apple.png';
import './PaginaProducto.css';

const PaginaProducto = () => {
    return (
        <div className="flex justify-center w-100">
            <div className="ba b--white bw2 w-30 tc">
                <img className="img" alt="product" src={Apple} />
            </div>

            <div className="ba b--yellow bw2 w-50">
                <h1>Nombre Producto</h1>
                <div className="flex inline-flex ml2">
                    <p className="ma0 w-50">Precio</p>
                    <p className="ma0 w-50 i">Categoría</p>
                </div>
                <p>Descripción</p>
            </div>
        </div>
    )
}

export default PaginaProducto
