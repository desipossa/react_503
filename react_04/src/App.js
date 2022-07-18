import { useState, useRef } from "react";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
const App = () => {
  const nextId = useRef(3);
  const [todoList, setTodolist] = useState([
    { id: 1, content: '오늘할 일 1' },
    { id: 2, content: '오늘할 일 2' },
  ]);

  console.log(nextId.current);

  const onChange = (e) => {
    const { name, value } = e.target;
    setDodo({ id: nextId.current, [name]: value });
  }
  const [todo, setDodo] = useState({});

  const onCleate = () => {
    setTodolist([...todoList, todo]);
    nextId.current += 1;
  }

  return (
    <>
      {/* 리스트를 뿌려주마... */}
      <TodoList TodoList={todoList} />
      <CreateTodo onCleate={onCleate} onChange={onChange} />


      {/* <button onClick={() => setTodolist([...todoList, { id: 3, content: '오늘할 일 3' }])}>리스트 바꾸기</button> */}
    </>
  )
}
export default App;
