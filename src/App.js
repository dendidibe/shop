import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import {Shop} from './components/Shop'
import {Cart} from './components/Cart'
import {Navbar} from './components/Navbar'



function App() {
  return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/" component={Shop} exact/>
            <Route path="/cart" component={Cart}/>
          </Switch>
        </div>
      </Router>

  );
}

export default App;
