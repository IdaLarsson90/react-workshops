import { useState } from 'react'

export default function AddInsult (props) {
    const { insults, setInsults } = props;

    const [inputValue, setInputValue] = useState({
        insult: "",
        play: ""
    });
    
    function handleChange (event) {
       setInputValue((prevInputValue) => {
           return {
                ...prevInputValue, 
                [event.target.name]: event.target.value
            }
        })
    }
     function submit (event) {
        event.preventDefault();
        console.log(inputValue);
        setInsults((prevInsults)=> [...prevInsults, inputValue]);
     }
 

    return (
        <form onSubmit={submit}>
            <input name='insult' type="text" placeholder='Insult' value={inputValue.insult} onChange={ handleChange } /> 
            <input name='play' type="text" placeholder='Play' value={inputValue.play} onChange={ handleChange } /> 
            <button className='addBtn' >Add Insult</button>
        </form>
    )
}
