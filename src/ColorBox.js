import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  ColorBox: {
    width: '20%',
    height: (props) => (props.showingFullPalette ? '25%' : '50%'),
    display: 'inline-block',
    margin: '0 auto',
    cursor: 'pointer',
    position: 'relative',
    marginBottom: '-10px',
    '&:hover button': {
      opacity: 1,
    },
  },

  copyText: {
    color: (props) =>
      chroma(props.color).luminance() >= 0.7 ? 'black' : 'white',
  },
  colorName: {
    color: (props) =>
      chroma(props.color).luminance() <= 0.08 ? 'white' : 'black',
  },

  seeMore: {
    color: (props) =>
      chroma(props.color).luminance() >= 0.7 ? 'rgba(0, 0, 0, 0.6)' : 'white',
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    bottom: '0px',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase',
  },

  copyButton: {
    color: (props) =>
      chroma(props.color).luminance() >= 0.7 ? 'rgba(0, 0, 0, 0.6)' : 'white',
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
    opacity: 0,
  },
};

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
    const { color, name, moreUrl, showingFullPalette, classes } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{ background: color }}>
          <div
            className={`copy-overlay ${copied && 'show'}`}
            style={{ background: color }}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>Copied</h1>
            <p className={classes.copyText}>{color}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={(evt) => evt.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
