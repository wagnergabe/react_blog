
import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p> Liked { likes } times</p>
        <p>{Math.random() * 2}</p>
      </div>
    </div>
  );
}

export default App;
