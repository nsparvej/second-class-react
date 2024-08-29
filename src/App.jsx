import "./App.css";
import Team from "./Team";
import Counter from "./assets/Count";
import User from "./User";
import Friends from "./Friends";


function App() {
  function handleClick() {
    alert("button is clicked");
  }

  const handleClick2 = () => {
    alert("click button 2");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <Friends></Friends>
      <User></User>
      <h1>React Core Concepts 2</h1>

      <Counter></Counter>

      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click me 2</button>
      <button
        onClick={() => {
          alert("third button clicked");
        }}
      >
        third click
      </button>
      <button onClick={() => addToFive(parseInt(prompt("add your number")))}>
        four
      </button>

      <Team></Team>
    </>
  );
}

export default App;
