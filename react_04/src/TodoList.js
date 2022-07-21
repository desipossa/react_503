const TodoList = ({ TodoList }) => {
    return (
        <ul>
            {TodoList.map(it => <li key={it.id}>{it.content}</li>)}
        </ul>
    )
}

export default TodoList;