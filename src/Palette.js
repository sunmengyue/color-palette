import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((c) => {
      return <ColorBox color={c.hex} name={c.name} />;
    });
    return (
      <div className='Palette'>
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* footer eventually */}
      </div>
    );
  }
}

export default Palette;
