import Card from '../Card/Card';

const CardList = ({ cards }) => {
    const cardsArray = cards.map((user, i) => {
        return (
            <Card
                name={cards[i].name}
                category={cards[i].category}
                key={cards[i]._id}
                prodID={cards[i]._id}
            />
        );
    });

    return (
        <div className="tc">
            {cardsArray}
        </div>
    )
}

export default CardList
