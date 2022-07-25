import { useEffect } from "react"

const TodoLIst = ({ todolist, setTodolist }) => {
    const onDelete = (num) => {
        console.log(num)
        setTodolist(todolist.filter(el => el.id !== num))
    }

    useEffect(() => {
        console.log('마운트 되었을 때 / 업데이트 되었을 떄')
    })
    return (
        <div className="TodoLIstWrap">
            <h2>{todolist.length ? <strong>오늘할 일은 {todolist.length}개</strong> : <span>할일 없음</span>}</h2>
            <hr />
            <ul className="TodoLIst">
                {
                    todolist.map(el => <li key={el.id}>{el.content}  <i className="xi-close closeBtn" onClick={() => onDelete(el.id)}></i></li>)
                }
            </ul>
        </div>
    )
}
export default TodoLIst;