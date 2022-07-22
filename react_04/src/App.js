import { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
const App = () => {
  const nextId = useRef(3);
  const [todoList, setTodolist] = useState([
    { id: 1, content: '오늘할 일 1' },
    { id: 2, content: '오늘할 일 2' },
  ]);

  const [todo, setDodo] = useState({
    id: nextId.current,
    content: ''
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setDodo({ id: nextId.current, [name]: value });
  }

  const onCleate = () => {

    if (todo.content.length < 5) {
      alert('더 입력해주삼...')
      return
    }
    nextId.current++;
    setTodolist([...todoList, todo]);
    setDodo({
      id: nextId.current,
      content: ''
    });
    console.log(todo.content, todoList);
  }

  const onDelate = (id) => {
    setTodolist(todoList.filter(todo => todo.id !== id))
    nextId.current--;
  }

  return (
    <>
      {/* 리스트를 뿌려주마... */}
      <TodoList TodoList={todoList} onDelate={onDelate} />
      <CreateTodo onCleate={onCleate} onChange={onChange} todo={todo} />
      {/* <button onClick={() => setTodolist([...todoList, { id: 3, content: '오늘할 일 3' }])}>리스트 바꾸기</button> */}
    </>
  )
}
export default App;
