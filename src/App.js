import React, { Component } from 'react';

import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalettes } from './colorHelper';
class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalettes(seedColors[4])} />
      </div>
    );
  }
}

export default App;
