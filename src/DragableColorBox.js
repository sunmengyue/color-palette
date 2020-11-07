import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    display: 'inline-block',
    margin: '0 auto',
    cursor: 'pointer',
    position: 'relative',
    marginBottom: '-10px',
  },
};

function DragableColorBox(props) {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className={props.classes.root}
    >
      {props.color}
    </div>
  );
}

export default withStyles(styles)(DragableColorBox);
