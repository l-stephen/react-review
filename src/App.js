
import './App.css';
import Login from './login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login title="Login" users = "Username: " pwd = "Password: "></Login>
      </header>
    </div>
  );
}

export default App;
