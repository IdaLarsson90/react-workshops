import { useNavigate } from 'react-router-dom'

import './Registration.css'

export default function Registration (props) {
    const {handleChange} = props;
    const navigate = useNavigate();
    
    function signUp () {
        navigate('/account')
    }

    return (
        <section>
            <h2>Registrera dig för ett konto</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={ handleChange } />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={ handleChange } />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={ handleChange }/>
                <button type="button" onClick={ signUp }>Sign me up!</button>
            </form>
        </section>
    )
}