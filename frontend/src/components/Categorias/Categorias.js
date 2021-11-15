import { Link } from 'react-router-dom';

const Categorias = () => {
    return (
        <div className="tc">
            <h2 className="ma0 mt1">Filtrar por:</h2>
            <Link className="f3 grow no-underline br-pill ph3 pv2 ma3 dib black logo-green-bg" to="/">De Agua</Link>
            <Link className="f3 grow no-underline br-pill ph3 pv2 ma3 dib black logo-green-bg" to="/">De Leche</Link>
            <Link className="f3 grow no-underline br-pill ph3 pv2 ma3 dib black logo-green-bg" to="/">Premium</Link>
            <Link className="f3 grow no-underline br-pill ph3 pv2 ma3 dib black logo-green-bg" to="/">Paletas</Link>
        </div>
    )
}

export default Categorias;