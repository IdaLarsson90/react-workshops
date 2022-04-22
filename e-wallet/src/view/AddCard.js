import Top from '../components/Top'
import Card from '../components/Card'
import CardForm from '../components/CardForm'



export default function AddCard (props) {
    const {handleChange, addCard} = props
    const emptyCard = {
        cardNumber: "XXXX XXXX XXXX XXXX",
        name: "Firstname Lastname",
        valid: "MM/YY",
        ccv: "ccv",
        vendor: "null", 
        id: "0"
      }
     
    return(
    <section className='addCard'>
        <Top  heading="Add a new bank card" subHeading = "new card"/>
        <Card cardInfo = {emptyCard}  />
        <CardForm handleChange={handleChange} addCard={addCard} />
        
    </section>
    )
}