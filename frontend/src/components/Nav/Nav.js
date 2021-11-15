import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="bt bb tc mw9 center mt3 flex justify-around">
            <Link to="/" className="f6 f5-l link bg-animate black-80 hover-bg-washed-yellow dib pa1 ph4-l w-100">
                <p>Inicio</p>
            </Link>
            <Link to="/categorias" className="f6 f5-l link bg-animate black-80 hover-bg-washed-green dib pa1 ph4-l w-100">
                <p>Categorías</p>
            </Link>
            <Link to="/productos" className="f6 f5-l link bg-animate black-80 hover-bg-washed-yellow dib pa1 ph4-l w-100">
                <p>Productos</p>
            </Link>
            <Link to="/contacto" className="f6 f5-l link bg-animate black-80 hover-bg-washed-green dib pa1 ph4-l w-100">
                <p>Contacto</p>
            </Link>
        </nav>
    )
}

export default Nav
