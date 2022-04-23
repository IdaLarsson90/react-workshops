import './CardForm.css'


export default function CardForm (props) {

    const {handleChange, addCard} = props
    return (
        <form>
            <label htmlFor="cardNumber">Card number</label>
            <input type="text" name="cardNumber" id="cardNumber" onChange={ handleChange } />
            <label htmlFor="name">Cardholder name</label>
            <input type="text" name="name" id="name" onChange={ handleChange }  />
            <section>
                <article className='valid'>
                    <label htmlFor="valid">Valid thru (MM/YY)</label>
                    <input type="text" name="valid" id="valid" onChange={ handleChange }/>
                </article>
                <article>
                    <label htmlFor="ccv">Ccv</label>
                    <input type="text" name="ccv" id="ccv" onChange={ handleChange }/>
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