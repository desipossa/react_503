const TodoList = ({ TodoList }) => {
    return (
        <ul>
            {console.log(TodoList)}
            {TodoList.map(it => <li key={it.id}>{it.content}</li>)}
        </ul>
    )
}

export default TodoList;