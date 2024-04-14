import './App.css';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Service from './pages/Service/Service';

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
          <Route path="/Contact">
            <Contact/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;