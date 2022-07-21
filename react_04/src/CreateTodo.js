const CreateTodo = ({ onCleate, onChange, todo }) => {
    return (
        <>
            <input name="content" onChange={onChange} value={todo.content} />
            <button onClick={onCleate}>할일 추가</button>
        </>
    )
}
export default CreateTodo;