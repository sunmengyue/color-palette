import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';

const App = () => {
  return (
    <div>
      <Palette {...seedColors[6]} />
    </div>
  );
};

export default App;
