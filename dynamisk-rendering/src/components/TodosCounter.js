function TodosCounter (props) {
    const {amount} = props;
    console.log(amount);
    return (
        <span>Antal Todos: {amount}</span>
    )
}

export default TodosCounter;