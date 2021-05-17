import app from './app';
import mongoose from "mongoose";
import Post from './models/posts.model';
import { posts } from './posts';


const PORT = process.env.port || 5000;

app.listen(PORT, () => {
    console.log("Server is runing on port: "+PORT);

    mongoose.connect("mongodb://localhost/pagination", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const cnx = mongoose.connection;
    cnx.once('open', async() => {
        console.log('database connected successfully');
        const exist = await Post.countDocuments() > 0 ? true : false;
        if (exist) return;
        else{
            const saved  = await Post.insertMany([
                ...posts
            ]);
            if(saved){
                console.log("Posted are saved successfully");
            }
        }
    })
});