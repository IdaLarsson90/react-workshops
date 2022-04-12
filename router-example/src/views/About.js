import { useNavigate } from "react-router-dom"

export default function About () {
    const navigate = useNavigate();

    function goBack () {
        navigate('/');
    }
    return (
        <section>
            <h2>Detta är om-sidan</h2>
            <button onClick={ goBack }> Gå tillbaka </button>
        </section>
    )
}