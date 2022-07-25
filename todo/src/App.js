import { useRef, useState } from "react";
import TodoLIst from './TodoLIst';
import CreateTodolist from "./CreateTodolist";
import Wrapper from "./Wrapper";

const App = () => {
  const [todolist, setTodolist] = useState([
    { id: 1, content: '오늘은 메로나 먹을거임' },
    { id: 2, content: '메로나 먹고 맥주 한 잔' },
    { id: 3, content: '맥주 마시고 자기' },
  ]);


  return (
    <Wrapper>
      <TodoLIst todolist={todolist} setTodolist={setTodolist} />
      <CreateTodolist todolist={todolist} setTodolist={setTodolist} />
    </Wrapper>
  )
}

export default App;