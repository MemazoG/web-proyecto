import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <header class="black-80 tc pv2 avenir">
                <h2 class="mt2 mb0 f6 fw4 tracked">Sweet Ice</h2>
                <nav class="bt bb tc mw9 center mt3">
                    <Link to="/">
                        <p class="f6 f5-l link bg-animate black-80 hover-bg-washed-yellow dib pa3 ph4-l">Inicio</p>
                    </Link>
                    <Link to="/categorias">
                        <p class="f6 f5-l link bg-animate black-80 hover-bg-washed-green dib pa3 ph4-l">Categorías</p>
                    </Link>
                    <Link to="/productos">
                        <p class="f6 f5-l link bg-animate black-80 hover-bg-washed-yellow dib pa3 ph4-l">Productos</p>
                    </Link>
                    <Link to="/contacto">
                        <p class="f6 f5-l link bg-animate black-80 hover-bg-washed-green dib pa3 ph4-l">Contacto</p>
                    </Link>
                </nav>
            </header>
        </div>
    )
}

export default Header
