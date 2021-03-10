import React from 'react';
import './App.css';
import Home from './Components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import FriendDetail from './Components/FriendDetail/FriendDetail';



function App() {
  

  return (
    <Router>
      <Switch>

        <Route path="/path">
           <Home />
        </Route>

        <Route path="/friend/:friendId">
          <FriendDetail></FriendDetail>
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <NoMatch></NoMatch>
        </Route>

      </Switch>
     
    </Router>
  );
}

export default App;
