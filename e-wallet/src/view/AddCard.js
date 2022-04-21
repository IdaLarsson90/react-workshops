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
    //   const cardColor = `linear-gradient(248.3deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%), #D0D0D0`;
      
    return(
    <section className='addCard'>
        <Top  heading="Add a new bank card" subHeading = "new card"/>
        <Card cardInfo = {emptyCard}  />
        <CardForm handleChange={handleChange} addCard={addCard} />
        
    </section>
    )
}