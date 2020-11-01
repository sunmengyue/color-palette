import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalettes } from './colorHelper';
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Palette list goes here</h1>} />
        <Route
          exact
          path='/palette/:id'
          render={() => <h1>Individual palette</h1>}
        />
      </Switch>
      //   <div className='App'>
      //   <Palette palette={generatePalettes(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
