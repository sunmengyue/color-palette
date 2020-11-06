import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteListStyles';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  constructor(props) {
    super(props);
  }

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to='/palette/newForm'>Create New Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((p) => (
              <MiniPalette {...p} handleClick={() => this.goToPalette(p.id)} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
