import Card from "./Card"
import './CardStack.css'

export default function CardStack (props) {
    const {cardsArr, activateCard} = props;
    
    const cards = cardsArr.map ((card) => {

        return <Card cardInfo= { card } activateCard={activateCard} key= {card.id} />
    })


    return (
        <section className="cards">
            {cards}
        </section>
    ) 
}