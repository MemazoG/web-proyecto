import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card';

const AdminCardList = ({ cards }) => {
    const cardsArray = cards.map((user, i) => {
        return (
            <div className="tc" key={cards[i]._id}>
                <Card
                    name={cards[i].name}
                    category={cards[i].category}
                    key={cards[i]._id}
                    prodID={cards[i]._id}
                    image={cards[i].image}
                />
                <div>
                    <Link className="f4 grow no-underline br-pill ph3 pv2 ma2 dib black logo-green-bg w-40" 
                        to={{
                            pathname: `/editar-producto/${cards[i]._id}`,
                            id: {productID: cards[i]._id},
                        }}>
                        Editar
                    </Link>
                    
                    <Link className="f4 grow no-underline br-pill ph3 pv2 ma2 dib black logo-green-bg w-40" 
                        to={{
                            pathname: `/eliminar-producto/${cards[i]._id}`,
                            id: {productID: cards[i]._id},
                        }}>
                        Borrar
                    </Link>
                </div>
            </div>
        );
    });

    return (
        <div className="tc flex flex-wrap justify-center br3 pa3 ma2 bw2">
            {cardsArray}
        </div>
    )
}

export default AdminCardList
