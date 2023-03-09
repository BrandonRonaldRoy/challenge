import logo from './logo.svg';
import './App.css';

function App() {
  let answer1 = 100;
  let answer2 = 25;
  let answer4 = 'blue';


  return (
    <div className="App">
      <div>
        <h1>Rebasing Challenge</h1>
        <p>1 + 1 = {answer1}</p>
        <p>50 / 2 = {answer2}</p>
        <div>
          <p>
            Violets are {answer4}  
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
