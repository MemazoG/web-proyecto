import CardList from '../CardList/CardList';
import Categorias from '../Categorias/Categorias';
import './Productos.css';

const Productos = ({ cards }) => {
    return (
        <div className="bg">
            {/*<Categorias />*/}
            <CardList cards={cards}/>
        </div>
    )
}

export default Productos;