import sizes from './sizes';
import bg from './bg.svg';
export default {
  '@global': {
    '.fade-exit': {
      opacity: 1,
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out',
    },
  },
  root: {
    backgroundColor: '#1e8feb',
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'scroll',
  },
  heading: {
    fontSize: '2rem',
  },
  container: {
    width: '55%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },

  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    '& a': {
      color: 'white',
      textDecoration: 'none',
    },
  },

  palettes: {
    boxSizing: 'border-box',
    width: '90%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '2rem',

    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
    },
    [sizes.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1.4rem',
    },
  },
};
