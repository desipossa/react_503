import { useRef, useState } from "react";

const App = () => {
  const next = useRef(1);
  console.log(next.current);
  const [num, setNum] = useState(next.current);
  console.log(num);
  return (
    <>
      <li>{num}</li>
      <button onClick={() => setNum(num + 1)}>click</button>
    </>
  )
}

export default App;