import React from 'react';
import PaletteFormNav from './PaletteFormNav';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from './DraggableColorList';
import arrayMove from 'array-move';
import ColorPickerForm from './ColorPickerForm';
import useStyles from './styles/NewPaletteFormStyles';

export default function NewPaletteForm({
  palettes,
  savePalette,
  history,
  maxColors,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [colors, setNewColors] = React.useState(palettes[0].colors);
  const [newColorName, setColorName] = React.useState('');
  const paletteIsFull = colors.length >= maxColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleSubmit(newPalette) {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
    newPalette.colors = colors;
    savePalette(newPalette);
    history.push('/');
  }

  function removeColor(colorName) {
    const newColors = colors.filter((c) => c.name !== colorName);
    setNewColors(newColors);
  }

  function onSortEnd({ oldIndex, newIndex }) {
    setNewColors(arrayMove(colors, oldIndex, newIndex));
  }

  function addNewColor(newColor) {
    setNewColors([...colors, newColor]);
    setColorName('');
  }

  function clearColors() {
    setNewColors([]);
  }

  function addRandomColor() {
    //pick random color from existing palettes
    const allColors = palettes.map((palette) => palette.colors).flat();
    var randIndx = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[randIndx];
    setNewColors([...colors, randomColor]);
  }

  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        palettes={palettes}
        handleDrawerOpen={handleDrawerOpen}
        handleSubmit={handleSubmit}
      />
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant='h4' gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant='contained'
              color='secondary'
              onClick={clearColors}
              className={classes.button}
            >
              Clear Palette
            </Button>
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              onClick={addRandomColor}
              disabled={paletteIsFull}
            >
              {paletteIsFull ? 'Palette Full' : 'Random Color'}
            </Button>
          </div>
          <ColorPickerForm
            className={classes.colorPickerForm}
            addNewColor={addNewColor}
            paletteIsFull={paletteIsFull}
            colors={colors}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis='xy'
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}

NewPaletteForm.defaultProps = {
  maxColors: 20,
};
