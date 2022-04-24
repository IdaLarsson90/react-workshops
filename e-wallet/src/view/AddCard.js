import Top from '../components/Top'
import Card from '../components/Card'
import CardForm from '../components/CardForm'

export default function AddCard (props) {
    const {handleChange, addCard, emptyCard} = props
         
    return(
    <section className='addCard'>
        <Top  heading="Add a new bank card" subHeading = "new card"/>
        <Card cardInfo = {emptyCard}  />
        <CardForm handleChange={handleChange} addCard={addCard} />
    </section>
    )
}