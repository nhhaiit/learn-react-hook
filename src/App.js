import { useState } from "react";
import Content from "./learn-hook/useEffect/Content";
import Checkbox from "./learn-hook/useState/Checkbox";
import Radio from "./learn-hook/useState/Radio";
import TodoList from "./learn-hook/useState/TodoList";

function App() {

  const [flag, setFlag] = useState(false);

  return (
    <div className="App" style={{padding: 32}}>
      <h1>UseState</h1>
      <h3>Checkbox</h3>
      <Checkbox/>
      <h3>Radio</h3>
      <Radio/>
      <h3>TodoList</h3>
      <TodoList/>

      <h1>UseEffect</h1>
      <button onClick={() => setFlag(!flag)}>Click Me!!</button>
      { flag &&<Content/> }
    </div>
  );
}

export default App;
