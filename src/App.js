import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Nav />
      <h1>lol</h1>
      <Button>This is a button</Button>
      <h1>Hello World</h1>
      <Home />
  
    </div>
  );
}

export default App;
