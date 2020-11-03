import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    console.log(this._shades);
  }
  gatherShades(palette, colorToFilter) {
    let shades = [];
    for (let key in palette.colors) {
      shades = shades.concat(
        palette.colors[key].filter((color) => color.id === colorToFilter)
      );
    }
    //return all shads of a given color
    return shades.slice(1);
  }
  render() {
    const colorShadesBoxes = this._shades.map((shade) => (
      <ColorBox key={shade.id} name={shade.name} color={shade.hex} />
    ));
    return (
      <div className='Palette'>
        <h1>Single Color Palette</h1>
        <div className='Palette-colors'>{colorShadesBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
