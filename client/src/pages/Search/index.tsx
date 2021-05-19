import {useState, useEffect} from 'react';
import axios from 'axios';
import { Box, Typography } from '@material-ui/core';

const Search = () => {
    const [query, setQuery] = useState<string>('');
    const [list, setList] = useState<any[]>([]);

    useEffect(()=> {
        let cancel: any;
        if(query){
            axios({
                url: `http://localhost:5000/posts/${query}`,
                headers: {
                    'content-type': 'application/json'
                },
                cancelToken: new axios.CancelToken(c => cancel = c)
            }).then((res) => {
                console.log(res.data);
                setList(res.data);
            }).catch(err => {
                if(axios.isCancel(err)) return;
                throw err;
            });
        }

        return () => {
            if(cancel){
                cancel();
            }
        };
    }, [query]);


    return (
        <Box mt={2}>
            <form autoComplete='off'>
                <input type="text" value={query} onChange={(e)=> {setQuery(e.target.value)}} />
            </form>
            {
                list.map((item: any)=> (
                    <Typography key={item._id} variant="subtitle2">
                        {item.title}
                    </Typography>
                ))
            }
        </Box>
    )
}

export default Search
