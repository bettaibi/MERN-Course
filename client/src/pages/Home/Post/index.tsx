import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    CardHeader,
    Avatar,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    ButtonGroup,
    Button
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { format } from 'date-fns';
import useStyle from '../../../style';

const Post: React.FC = () => {
    const classes = useStyle();

    return (
        <Card className="mb-2">
            <CardHeader
                avatar={
                    <Avatar className={classes.orange} sizes="sm" >
                        N
                    </Avatar>
                }
                action={
                    <ActionMenu />
                }
                title="Bettaibi Nidhal"
                subheader={format(new Date(), 'EEEE MM, yyyy')}
            />
            <CardMedia
                image="https://source.unsplash.com/daily"
                className={classes.media}
                title="random image"
            />
            <CardContent>
                <Typography color="textSecondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, enim nobis laborum at blanditiis esse quod corporis exercitationem consectetur deserunt. Aliquid in aspernatur, aut voluptate corrupti veniam voluptates incidunt libero!
                </Typography>

                {/* <Grid className="py-1" container direction="row" justify="space-between" alignItems="center">
                    <Grid item>
                        <span>
                            45
                        </span>
                        <IconButton size="small">
                            <ThumbUpAltTwoTone />
                        </IconButton>
                    </Grid>

                    <Grid item>
                        9 Comments
                    </Grid>
                </Grid> */}

                <div className="pt-1">
                    <ButtonGroup fullWidth>
                        <Button>18 Like</Button>
                        <Button>12 Comments</Button>
                    </ButtonGroup>
                </div>
            </CardContent>
        </Card>
    )
}

const ActionMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <IconButton onClick={handleClick}>
                <MoreVert />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Delete</MenuItem>
                <MenuItem onClick={handleClose}>Edit</MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default Post
