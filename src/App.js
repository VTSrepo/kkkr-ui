//import logo from './logo.svg';
import './App.css';
//import Login from './components/login/login';
import AppNavBar from './components/appbar';
import Router from './routes';

function App() {
  return (
    <div className="App">
      <AppNavBar/>
      <Router/>
    </div>
  );
}

export default App;
