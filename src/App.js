import React, { Component } from 'react';

import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalettes } from './colorHelper';
class App extends Component {
  render() {
    console.log(generatePalettes(seedColors[4]));
    return (
      <div>
        <Palette {...seedColors[6]} />
      </div>
    );
  }
}

export default App;
