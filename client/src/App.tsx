
import { 
  Typography, 
  Toolbar, 
  AppBar, 
  IconButton, 
  CssBaseline, 
  Button, 
  Container,
  Grid
} from '@material-ui/core';
import { Camera } from '@material-ui/icons';

import React from 'react';
import useStyle from './style';

function App() {
  const classes = useStyle();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position = "relative">
        <Toolbar variant="dense">
          <IconButton color="inherit" size="medium">
            <Camera />
          </IconButton>
          <Typography variant="h6">
             Album Title
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Container maxWidth="sm" className={classes.container}>
          <Typography variant="h2" color="textPrimary" align="center" gutterBottom>
            Album layout
          </Typography>
          
          <Typography variant="h5" color="textSecondary" align="center">
            Hello everyone, This is a photo Album and i am trying to make this sentence as long as possible so we can see how does it look like on the screen.
          </Typography>

          <Grid container justify="center" spacing={2} className={classes.buttonSpacing}>
            <Grid item>
               <Button size="medium" variant="contained" color="primary">Main Call to action</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">Secondary action</Button>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default App;
