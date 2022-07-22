const TodoLIst = ({ todolist }) => {
    return (
        <ul className="TodoLIst">
            {
                todolist.map(el => <li key={el.id}>{el.content}</li>)
            }
        </ul>
    )
}
export default TodoLIst;