import "./App.css";
import { useState, useRef } from "react";
function App() {
  const number = Math.trunc(Math.random() * 20) + 1;
  function handleCheck() {
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const [message, setMessage] = useState("Start guessing...")
  const [secretNumber, setSecretNumber] = useState("?")
  const inputRef = useRef(null);
  const inputNumber = inputRef.current.value;
  if (inputNumber === number) {
    setMessage("Has acertado!")
    setHighscore(score)
    setSecretNumber(inputNumber)
  }
  else if (inputNumber > number){
    setMessage("Te has pasado! Intentalo de nuevo")
    setScore(score - 1)

  }
  else{
    setMessage("Te has quedado corto! Intentalo de nuevo")
    setScore(score - 1)
  }

  }
  return (
    <>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again">Again!</button>
        <div className="number">{secretNumber}</div>
      </header>
      <main>
        <section className="left">
          <input type="number" class="guess" ref={inputRef}/>
          <button className="btn check" onClick={handleCheck}>Check!</button>
        </section>
        <section className="right">
          <p className="message">{message}</p>
          <p className="label-score">
            💯 Score: <span class="score">{score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
