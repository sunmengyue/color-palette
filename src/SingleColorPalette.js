import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: 'hex' };
    this.changeFormat = this.changeFormat.bind(this);
  }
  gatherShades(palette, idOfcolorToFilter) {
    let shades = [];
    for (let key in palette.colors) {
      shades = shades.concat(
        palette.colors[key].filter((color) => color.id === idOfcolorToFilter)
      );
    }
    //return all shads of a given color
    return shades.slice(1);
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const colorShadesBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        color={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className='SingleColorPalette Palette'>
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className='Palette-colors'>
          {colorShadesBoxes}
          <div className='go-back ColorBox'>
            <Link to={`/palette/${id}`} className='back-button'>
              Go Back
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
