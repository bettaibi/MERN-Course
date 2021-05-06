import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=> ({
    // container: {
    //   backgroundColor: theme.palette.background.paper,
    //   padding: theme.spacing(10, 0,0),
    //   paddingTop: '3rem'
    // },
    padding0: {
      padding: theme.spacing(0, 0, 0, 1),
      width: 280,
      borderBottom: '1px solid rgba(0,0,0, .12)'
    },
    mp0: {
      margin: theme.spacing(0),
      padding: theme.spacing(0)
    },
    navLink: {
      textDecoration: 'none',
      color: 'rgba(0, 0, 0, .8)'
    },
    NavLiknActive: {
      color: 'blue'
    },
    navLinkSpacing: {
      paddingBottom : theme.spacing(1)
    },
    cursor: {
      cursor: 'pointer'
    },
    rotate90: {
      transform: 'rotate(90deg)',
    },
    rotate0: {
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    fakeInput: {
      width: '100%',
      height: '40px',
      borderRadius: '20px',
      backgroundColor: '#F0F2F5',
      '&:hover': {
        backgroundColor: '#e6e7e8'
      }
    },
    orange: {
      backgroundColor: 'orange'
    }
}));

export default useStyle;