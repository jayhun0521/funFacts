import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostOne from './components/PostOne';
import PostTwo from './components/PostTwo';
import PostThree from './components/PostThree';
import Home from './components/Home';

class App extends Component {
  render() {
  return (
   <BrowserRouter>
   <Home />
    <div className="App">
    <Switch>
      {/* <Route exact path='/' component={Home} /> */}
      <Route path='/postOne' component={PostOne} />
      <Route path='/postTwo' component={PostTwo} />
      <Route path='/postThree' component={PostThree} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}
}
export default App;
