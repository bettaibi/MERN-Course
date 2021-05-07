import React from 'react';

import {
    Box,
    Paper,
    Avatar,
    Grid
} from '@material-ui/core';
import useStyle from '../../style';
import ReusableDialog from '../../components/ReusableDialog';
import useToggle from '../../components/useToggle';
import Post from '../../components/Post';

const Home: React.FC = () => {
    const posts = [1,2,3,4]

    return (
        <React.Fragment>
            <Box my={3}>
                <PostDialogContainer />
            </Box>
            {
                posts.map((item: number)=> (
                    <Post key={item} />
                ))
            }
        </React.Fragment>
    )
}

const PostDialogContainer: React.FC = () => {
    const classes = useStyle();
    const { show, openHandler, closeHandler } = useToggle();

    return (
        <React.Fragment>
            <Paper className="p-2">
                <Grid container direction="row" spacing={1}>
                    <Grid item>
                        <Avatar className={classes.orange}>N</Avatar>
                    </Grid>
                    <Grid item className={classes.flexGrow1}>
                        <Box className={classes.fakeInput + ' ' + classes.cursor}
                            display="flex" alignItems="center" px={2}
                            onClick={openHandler}>
                            <span>What are your thoughts?</span>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
            <ReusableDialog show={show} handleClose={closeHandler} title="New Post">
                sqmlkdl qsmldk qslkdlm
            </ReusableDialog>
        </React.Fragment>
    )
}

export default Home;
