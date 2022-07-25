import { useEffect, useRef, useState } from "react";

const CreateTodolist = ({ todolist, setTodolist }) => {
    const nextId = useRef(4);
    const refInput = useRef(null);
    const [input, setInput] = useState({
        id: nextId.current,
        content: ''
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setInput({
            id: nextId.current,
            [name]: value,
        })
    }

    const inputHandler = () => {
        if (input.content.length < 5) {
            alert('5자 이상 입력하세요.')
            return
        }
        nextId.current++;
        setTodolist([
            ...todolist,
            input
        ]);
        setInput({
            id: nextId.current,
            content: ''
        })
    }

    useEffect(() => {
        console.log(input.content, todolist, refInput.current);
        console.log('마운트 되었을 때 1번')
        refInput.current.focus();
    }, []);

    return (
        <div className="CreateTodolist">
            <input name='content' onChange={onChange} value={input.content} ref={refInput} />
            <button onClick={inputHandler}>입력</button>
        </div>
    )
}

export default CreateTodolist;