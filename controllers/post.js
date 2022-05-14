import postModel from "../models/postModel.js";

const getPost = async (req, res) => {
    //Save Record
    /*
    const record1 = new postModel({
        userName: "Bao Nguyen",
        time: "2 giờ",
        //privacy: "public",
        content: "Cuộc sống mà",
        media: "https://www.youtube.com/embed/BNGBDIH-Rfg",
        infoAction: {
            infoLike: 18,
            infoComment: 23,
            infoShare: 1
        }
    });

    record1.save((err) => {
        if(err){
            return err;
        }
    });

    const record2 = new postModel({
        userName: "Kẻ Cướp Mặt Trời Đem Bán",
        time: "30 phút",
        privacy: "friends",
        content: "Tớ mới vừa chôm mặt trời nhưng đi giữa đường bị rơi ở sông Hàn",
        media: "https://www.youtube.com/embed/X46cz6WqpoA",
        infoAction: {
            infoLike: 25,
            infoComment: 876,
            infoShare: 5
        }
    });

    record2.save((err) => {
        if(err){
            return err;
        }
    });
    */

    try {
        const posts = await postModel.find();
        res.status(200).json(posts);
    } catch(err) {
        res.status(500).json({error: err});
    }
}

//comment
const commentPost = async (id, userName, comment) => {
    console.log(comment);
    await postModel.findByIdAndUpdate(id, {$push: {comments: {userName: userName, content: comment}}});
}

export {getPost, commentPost};