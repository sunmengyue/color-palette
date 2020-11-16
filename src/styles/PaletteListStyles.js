import sizes from './sizes';
import bg from './bg.svg';
export default {
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
  [sizes.down('xl')]: {
    width: '70%',
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
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '1.5rem',

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
