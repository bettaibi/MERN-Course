import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=> ({
    container: {
      // backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(10, 0,0)
      // paddingTop: '3rem'
    },
    buttonSpacing: {
      margin: theme.spacing(1, 0)
    }
}));

export default useStyle;