import { useState } from "react";

export default function Account (props) {
    const {inputValue, handleChange} = props

    const [change, setChange] = useState(true)
    
    return (
        <section>
            <h2>Ditt konto</h2>
            { change && (
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={inputValue.name} disabled/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={inputValue.email} disabled />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={inputValue.password} disabled />
                    <button type="button" onClick={ () => setChange(!change)}>Ändra</button>
                </form>
                )
            }
            { !change && (
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={inputValue.name} onChange={ handleChange } />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={inputValue.email} onChange={ handleChange } />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={inputValue.password} onChange={ handleChange } />
                    <button type="button" onClick={ () => setChange(!change)}>Spara</button>
                </form>
                )
            }
        </section>
    )
}