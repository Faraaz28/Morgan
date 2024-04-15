import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Service from './pages/Service/Service';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
          <Route path="/Service">
            <Service />
          </Route>
          <Route path="/Blogs">
            <Blogs />
          </Route>
          // <Route path="/Contact">
            <Contact/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;