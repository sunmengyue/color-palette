import React, { PureComponent } from 'react';
import styles from './styles/MiniPaletteStyle';
import { withStyles } from '@material-ui/core/styles';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);
    this.deletePalette = this.deletePalette.bind(this);
  }
  deletePalette(evt) {
    evt.stopPropagation();
    this.props.openDialog(this.props.id);
  }
  render() {
    const { classes, paletteName, emoji, colors, handleClick, id } = this.props;
    console.log('rendering: ', paletteName);
    const miniColorBoxes = colors.map((color) => (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
        key={color.name}
      />
    ));
    return (
      <div className={classes.root} onClick={() => handleClick(id)}>
        <DeleteOutlinedIcon
          className={classes.deleteIcon}
          style={{ transition: 'all 0.3s ease-in-out' }}
          onClick={this.deletePalette}
        />

        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
