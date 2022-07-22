const TodoList = ({ TodoList, onDelate }) => {
    return (
        <ul>
            {TodoList.map(it => <li key={it.id} >   {it.content} <span onClick={() => onDelate(it.id)}>DEL</span></li>)}
        </ul>
    )
}

export default TodoList;