import mongoose, {Schema} from 'mongoose';

const postSchema: Schema = new Schema({
    title: {
        type: String,
        required: [true, 'title is requirec']
    },
    body: {
        type: String
    }
});

export default mongoose.model('Post', postSchema);