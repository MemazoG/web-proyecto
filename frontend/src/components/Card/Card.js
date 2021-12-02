import { Link } from 'react-router-dom';
import Apple from './apple.png';
import './Card.css';



const Card = ({ name, category, prodID }) => {

    return (
        <Link 
            to={{ 
                    pathname:`/pagina-producto/${prodID}`, 
                    id: { productID: prodID } 
                }} 
            className="tc logo-green-bg dib flex-wrap br3 pa3 ma2 grow bw2 shadow-5 pointer card" 
            style={{ textDecoration: 'none' }}>
                <img className="img" alt="product" src={Apple}/>
                <div>
                    <h2 className="f4 black-90">{name}</h2>
                    <p className="f5 i black-90">{category}</p>
                </div>
        </Link>
    )
}

export default Card
