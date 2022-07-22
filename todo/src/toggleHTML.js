import { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(true);
  console.log(toggle)
  return (
    <>
      <div>{toggle ? <span>나는 메인이지롱...</span> : <li>나는 메롱이지롱...</li>} ???</div>
      <button onClick={() => setToggle(!toggle)}>click</button>
    </>
  )
}

export default App;