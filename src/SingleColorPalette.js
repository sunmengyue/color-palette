import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },

  colors: {
    height: '90%',
  },

  goBack: {
    width: '20%',
    height: '50%',
    display: 'inline-block',
    margin: '0 auto',
    cursor: 'pointer',
    position: 'relative',
    marginBottom: '-10px',
    opacity: 1,
    backgroundColor: 'black',
    '& a': {
      color: 'white',
      height: '30px',
      width: '100px',
      position: 'absolute',
      display: 'inlineBlock',
      top: '50%',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-15px',
      textTransform: 'uppercase',
      textAlign: 'center',
      textEmphasis: 'none',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      lineHeight: '30px',
      border: 'none',
      fontSize: '1rem',
      textDecoration: 'none',
    },
  },
};

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
    const { classes } = this.props;
    const colorShadesBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        color={color[format]}
        showingFullPalette={false}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className={classes.colors}>
          {colorShadesBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
