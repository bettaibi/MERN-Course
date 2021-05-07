import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    CardHeader,
    Avatar,
    IconButton,
    Typography,
    Grid,
    Divider
} from '@material-ui/core';
import { MoreVert, ThumbUpAltTwoTone } from '@material-ui/icons';
import { format } from 'date-fns';
import useStyle from '../../style';


const Post: React.FC = () => {
    const classes = useStyle();

    return (
        <Card className="mb-2">
            <CardHeader 
                avatar = {
                    <Avatar className={classes.orange} sizes="sm" >
                        N
                    </Avatar>
                }
                action = {
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }
                title = "Bettaibi Nidhal"
                subheader = {format(new Date(), 'EEEE MM, yyyy')}
            />
            <CardMedia 
                image="https://source.unsplash.com/daily"
                className = {classes.media}
                title="random image"
            />
            <CardContent>
                <Typography color="textSecondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, enim nobis laborum at blanditiis esse quod corporis exercitationem consectetur deserunt. Aliquid in aspernatur, aut voluptate corrupti veniam voluptates incidunt libero!
                </Typography>

                <Grid className="py-1" container direction="row" justify="space-between" alignItems="center">
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
                </Grid>
                <Divider />
                <div className="pt-1">
                    comment section here 
                    {}
                </div>
            </CardContent>
        </Card>
    )
}

export default Post
