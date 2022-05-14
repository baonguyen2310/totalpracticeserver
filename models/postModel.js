import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    time: {
        type: String,
        default: "0 giờ"
    },
    privacy: {
        type: String,
        default: 'public'
    },
    content: {
        type: String,
        default: ""
    },
    media: {
        type: String,
        default: ""
    },
    infoAction: {
        infoLike: {
            type: Number,
            default: 0
        },
        infoComment: {
            type: Number,
            default: 0
        },
        infoShare: {
            type: Number,
            default: 0
        }
    },
    comments: [
        {
            userName: {
                type: String,
                default: "",
                required: true
            },
            content: {
                type: String,
                required: true
            }
        }
    ]
});

const postModel = mongoose.model('Post', postSchema);
export default postModel;