// import logo from './logo.svg';
import './App.css';

import About from './components/About';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Review from './components/Review';
import Aim from './components/Aim';
import Footer from './components/Footer';
import Contact from './components/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />  
      <Router>
          <Switch>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <Content />
              <Review />
              <Aim />
             
            </Route>

            

            
          </Switch>

      </Router>  
    <Footer />
        
      
      
    </>
  );
}

export default App;
