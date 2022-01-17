import './App.scss';
import Message from "./Message";

function App(props) {
    const yearNow = '2022';
  return (
    <div className="App">
      <header className="App-header">
        My first React App
          <Message year={yearNow} />
      </header>
    </div>
  );
}

export default App;
