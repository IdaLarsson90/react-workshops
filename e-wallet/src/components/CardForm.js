import './CardForm.css';
import NumberFormat from 'react-number-format';

export default function CardForm (props) {
    const {handleChange, addCard} = props;

    function limit(val, max) {
        if (val.length === 1 && val[0] > max[0]) {
          val = '0' + val;
        }
        if (val.length === 2) {
          if (Number(val) === 0) {
            val = '01';
          } else if (val > max) {
            val = max;
          }
        }
        return val;
      }
      
    function cardExpiry(val) {
      let month = limit(val.substring(0, 2), '12');
      let year = val.substring(2, 4);
      
      return month + (year.length ? '/' + year : '');
    }

    return (
        <form>
            <label htmlFor="cardNumber">Card number</label>
            <NumberFormat type="text" name="cardNumber" id="cardNumber" format="#### #### #### ####" onChange={ handleChange } />
            <label htmlFor="name">Cardholder name</label>
            <input type="text" name="name" id="name" onChange={ handleChange }  />
            <section>
                <article className='valid'>
                    <label htmlFor="valid">Valid thru (MM/YY)</label>
                    <NumberFormat name="valid" id="valid" format={cardExpiry} placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']} onChange={ handleChange }/>
                </article>
                <article>
                    <label htmlFor="ccv">Ccv</label>
                    <input type="text" name="ccv" id="ccv" maxLength={"3"} onChange={ handleChange }/>
                </article>
            </section>
            <label htmlFor="vendor">Vendor</label>
            <select name="vendor" id="vendor" onClick={ handleChange } >
                <option value="null"> </option>
                <option value="bitcoin">Bitcoin Inc</option>
                <option value="ninjaBank">Ninja Bank</option>
                <option value="blockChain">Block Chain Inc</option>
                <option value="evilCorp">Evil Corp</option>
            </select>
            <button className='button button--dark' onClick={addCard}>Add Card</button>
        </form>
    ) 
}