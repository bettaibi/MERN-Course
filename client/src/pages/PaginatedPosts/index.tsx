import React, { useState, useEffect } from 'react';
import {
    Paper,
    Typography,
    Box,
    makeStyles
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import axios from "axios";

interface PaginationOption {
    page: number;
    limit: number;
    slices: number;
    visitedPages: number[];
}

const PaginatedStyle = makeStyles((theme)=> ({
    mb1: {
        marginBottom: '1rem'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem'
    }
}));

const PaginatedPosts: React.FC = () => {
    const [options, setOptions] = useState<PaginationOption>({ page: 1, limit: 5, slices: 0, visitedPages: [] });
    const [results, setResults] = useState<any[]>([]);
    const classes = PaginatedStyle();

    useEffect(() => {

        if(!options.visitedPages.includes(options.page)){
            getPosts();
        }

    }, [options]);

    async function getPosts() {
        const res = await axios.get('http://localhost:5000/posts', {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                page: options.page,
                limit: options.limit
            }
        });
        const data = await res.data;
        setResults([...results,...data.result]);
        setOptions({ ...options, slices: Math.ceil(data.records / options.limit), visitedPages: [...options.visitedPages, options.page] });
        console.log(results.length)
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setOptions({ ...options, page: value})
    };

    return (
        <React.Fragment>
            {results.length > 0 ? <>
                <Box mt={2}>
                 <Pagination count={options.slices} page={options.page} onChange={handleChange} />
                </Box>
                <Box my={2} className= {classes.grid}>
                 
                   { results.map((item: any, index: number) => (
                       <>
                        <PostItem key={item._id+index} post={item} />
                       </>
                    ))}
            </Box></> : <span>Loading...</span>}
        </React.Fragment>
    )

}

interface PostItemProps {
    post: any
}
const PostItem: React.FC<PostItemProps> = ({ post }) => {
    const classes = PaginatedStyle();

    return (
        <Paper style={{ padding: '1rem' }} className={classes.mb1}>
            <Typography variant="h5">
                {post.title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
                {post.body}
            </Typography>
        </Paper>
    )
}

export default PaginatedPosts
