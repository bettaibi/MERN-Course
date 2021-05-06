import React from 'react';

import {
    Box,
    Paper,
    Avatar,
    Grid,
    Typography
} from '@material-ui/core';
import useStyle from '../../style';
import ReusableDialog from '../../components/ReusableDialog';
import useToggle from '../../components/useToggle';

const Home: React.FC = () => {


    return (
        <Box my={3}>
            <PostDialogContainer />
        </Box>
    )
}

const PostDialogContainer: React.FC = () => {
    const classes = useStyle();
    const { show, openHandler, closeHandler } = useToggle();

    return (
        <React.Fragment>
            <Paper className="p-2">
                <Grid container spacing={1} direction="row">
                    <Grid item xs={1}>
                        <Avatar className={classes.orange}>N</Avatar>
                    </Grid>
                    <Grid item xs={11}>
                        <Box className={classes.fakeInput + ' ' + classes.cursor}
                            display="flex" alignItems="center" px={2} ml={1}
                            onClick={openHandler}>
                            <span>What are your thoughts?</span>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
            <ReusableDialog show= {show} handleClose= {closeHandler} title="New Post">
                sqmlkdl qsmldk qslkdlm 
            </ReusableDialog>
        </React.Fragment>
    )
}

export default Home;
