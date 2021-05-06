import React from 'react';

import {
    Box,
    Paper,
    Avatar,
    Grid,
    Typography
} from '@material-ui/core';
import useStyle from '../../style';

const Home: React.FC = () => {
   

    return (
        <Box my={3}>
            <PostDialogContainer />
        </Box>
    )
}

const PostDialogContainer: React.FC = () =>{
    const classes = useStyle();

    return(
        <Paper className="p-2">
            <Grid container spacing={1} direction="row">
                <Grid item xs={1}>
                    <Avatar className={classes.orange}>N</Avatar>
                </Grid>
                <Grid item xs={11}>
                    <Box className={classes.fakeInput + ' ' + classes.cursor}
                        display="flex" alignItems="center" px={2} ml={1}>
                        <span>What are your thoughts?</span>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Home;
