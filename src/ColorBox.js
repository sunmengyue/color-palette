import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';
import chroma from 'chroma-js';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { color, name, moreUrl, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(color).luminance() <= 0.09;
    const isLightColor = chroma(color).luminance() >= 0.6;
    console.log(isDarkColor);
    return (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div className='ColorBox' style={{ background: color }}>
          <div
            className={`copy-overlay ${copied && 'show'}`}
            style={{ background: color }}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>Copied</h1>
            <p className={isLightColor && 'dark-text'}>{color}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={isDarkColor && 'light-text'}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor && 'dark-text'}`}>
              Copy
            </button>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={(evt) => evt.stopPropagation()}>
              <span className={`see-more ${isLightColor && 'dark-text'}`}>
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
