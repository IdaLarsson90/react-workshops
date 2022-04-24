import './CardStack.css'

export default function CardStack (props) {
    const {cards} = props;

    return (
        <section className="cards">
            {cards}
        </section>
    ) 
}