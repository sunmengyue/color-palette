import sizes from './sizes';
export default {
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
    [sizes.down('lg')]: {
      width: '25%',
      height: '33.333%',
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '20%',
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '10%',
    },
  },
};
