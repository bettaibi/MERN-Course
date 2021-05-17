import express, {Application, Request,  Response, NextFunction} from "express";
import { getPaginatedData } from './middlewares';
import Post from './models/posts.model';
import cors from "cors";

const app: Application = express();
app.use(cors());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello world')
});


app.get('/posts', getPaginatedData(Post), (req: Request, res: Response, next: NextFunction) => {
   

    return res.json(res.locals.posts);
});

export default app;