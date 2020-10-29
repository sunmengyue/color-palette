import React from 'react';
import Palettes from './Palettes';
import seedColors from './seedColors';

const App = () => {
  return (
    <div>
      <Palettes {...seedColors[4]} />
    </div>
  );
};

export default App;
