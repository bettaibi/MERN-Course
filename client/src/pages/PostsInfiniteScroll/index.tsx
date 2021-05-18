import React, { useEffect, useState, useRef } from 'react';
import {
    Paper,
    Typography,
    Box
} from '@material-ui/core';
import axios from "axios";

const PostsInfiniteScroll: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const { loading, error, list, hasNextPage } = useInfinieScroll(page, 10);
    const observerRef: any = useRef<HTMLDivElement>();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
              console.log(entry);
      
              if (entry.isIntersecting) {
                //do your actions here
                console.log('It works!')
              }
            },
            {
              root: null,
              rootMargin: "0px",
              threshold: 0.1
            }
          );
          if (observerRef.current) {
            observer.observe(observerRef.current);
          }
    }, [observerRef])

    return (
        <React.Fragment>
            <Box my={2}>
                {
                    list.map((item: any, index: number) => (
                        <Paper key={item._id} style={{ padding: '1rem', marginBottom: '1rem' }}>
                            <Typography variant="h5">
                                {item.title}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                                {item.body}
                            </Typography>
                        </Paper>
                    ))
                }
            </Box>
           { hasNextPage && <div ref={observerRef} style={{marginBottom: '1rem'}}>
                    {loading ? <span>Loading...</span> : null}
                    {error && <span>Error occured...</span>}
                    {!hasNextPage && <span>No more data..</span>}
            </div>}
        </React.Fragment>
    )
}


const useInfinieScroll = (page: number, limit: number) => {
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [list, setList] = useState<any[]>([]);
    const [hasNextPage, setHasNextPage] = useState<boolean>(true);

    useEffect(() => {
        if (hasNextPage) {
            setLoading(true);
            setError(false);
            setHasNextPage(false);
            axios({
                url: 'http://localhost:5000/posts',
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                },
                params: {
                    limit,
                    page
                }
            }).then((res) => {
                setList(
                    (state) => { return [...state, ...res.data.result] }
                );
                setLoading(false); setError(false);
                setHasNextPage(res.data.nextPage ? true : false);
                console.log(res)
            }).catch((err) => {
                console.error(err.message);
                setError(true);
                setLoading(false);
            });
        }
    }, [page, limit]);

    return {
        error,
        loading,
        list,
        hasNextPage
    };
}


export default PostsInfiniteScroll;
