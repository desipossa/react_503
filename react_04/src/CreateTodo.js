const CreateTodo = ({ onCleate, onChange }) => {
    return (
        <>
            <input name="content" onChange={onChange} />
            <button onClick={onCleate}>할일 추가</button>
        </>
    )
}
export default CreateTodo;