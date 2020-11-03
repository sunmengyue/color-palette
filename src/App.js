import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
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
          path='/palette/:paletteId/:colorId'
          render={(routeProps) => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalettes(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
        <Route
          exact
          path='/'
          render={(routeProps) => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
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
        <Route
          paty='/palette/:id/:colorId'
          exact
          render={() => <SingleColorPalette />}
        />
      </Switch>
      //   <div className='App'>
      //   <Palette palette={generatePalettes(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
