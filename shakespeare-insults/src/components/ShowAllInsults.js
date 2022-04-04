function ShowAllInsults (props){
    const {insult, play} = props;
    
    return (
        <article>
            <ul>
                <li> { insult } <span> - { play } </span> </li>
            </ul>
        </article>
    )
}

export default ShowAllInsults;