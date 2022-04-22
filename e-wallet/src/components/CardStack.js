import Card from "./Card"
import './CardStack.css'

export default function CardStack (props) {
    const {cardsArr, activateCard, cards} = props;

    return (
        <section className="cards">
            {cards}
        </section>
    ) 
}