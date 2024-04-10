import './App.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';



import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Blogs">
            <Blogs />
            </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;