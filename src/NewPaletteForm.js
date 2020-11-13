import React from 'react';
import PaletteFormNav from './PaletteFormNav';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from './DraggableColorList';
import arrayMove from 'array-move';
import ColorPickerForm from './ColorPickerForm';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

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

  function handleSubmit(newPaletteName) {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      colors: colors,
    };
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
        classes={classes}
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
        <Typography variant='h4'>Design Your Palette</Typography>
        <div>
          <Button variant='contained' color='secondary' onClick={clearColors}>
            Clear Palette
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={addRandomColor}
            disabled={paletteIsFull}
          >
            {paletteIsFull ? 'Palette Full' : 'Random Color'}
          </Button>
        </div>
        <ColorPickerForm
          addNewColor={addNewColor}
          paletteIsFull={paletteIsFull}
          colors={colors}
        />
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
