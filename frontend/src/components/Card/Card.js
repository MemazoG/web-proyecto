import Apple from './apple.png';
import './Card.css';

const Card = ({ name, category }) => {
    return (
        <div className="tc logo-green-bg dib flex-wrap br3 pa3 ma2 grow bw2 shadow-5 pointer card">
            <img className="img" alt="product" src={Apple}/>
            <div>
                <h2 className="f4">{name}</h2>
                <p className="f5 i">{category}</p>
            </div>
        </div>
    )
}

export default Card
