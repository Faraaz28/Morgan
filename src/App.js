
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/About">
            <About />
          </Route>

        </Switch>
      </Router>


    </>

  );
}

export default App;
