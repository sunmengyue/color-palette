import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
  render() {
    const colors = this.props.colors.map((c) => {
      return <ColorBox color={c.color} name={c.name} />;
    });
    return (
      <div className='Palette'>
        {/* Navbar goes here */}
        <div className='Palette-colors'>{colors}</div>
        {/* footer eventually */}
      </div>
    );
  }
}

export default Palette;
