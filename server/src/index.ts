import app from './app';

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
    console.log("Server is runing on port: "+PORT);
});