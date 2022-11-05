import { video } from "../data/video";

const getData = async (videoId: string) => {
    return video[videoId];
}

const postLike = async (videoId: string) => {
    if (video[videoId].is_liked) {
        video[videoId].is_liked = false;
    } else {
        video[videoId].is_liked = true;
    }
}

const postSubscribe = async (videoId: string) => {
    if (video[videoId].is_subscribed) {
        video[videoId].is_subscribed = false;
    } else {
        video[videoId].is_subscribed = true;
    }
}

export { getData, postLike, postSubscribe };