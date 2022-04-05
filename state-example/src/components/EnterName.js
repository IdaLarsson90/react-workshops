import { useState } from 'react';

function EnterName () {
    const  [name, setName] = useState('Ida');
  

    function getInputValue(event) {
        setName(event.target.value);
    }

    return (
        <section>
            <input type="text" placeholder="Skriv ett namn" onKeyUp={ getInputValue } />
            <p> {name}</p>
        </section>
    )
}

export default EnterName;