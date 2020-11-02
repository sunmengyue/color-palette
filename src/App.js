import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import PaletteList from './PaletteList';
import { generatePalettes } from './colorHelper';
class App extends Component {
  findPalette(id) {
    return seedColors.find((palette) => palette.id === id);
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={() => <PaletteList palettes={seedColors} />}
        />
        <Route
          exact
          path='/palette/:id'
          render={(routeProps) => (
            <Palette
              palette={generatePalettes(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
      //   <div className='App'>
      //   <Palette palette={generatePalettes(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
