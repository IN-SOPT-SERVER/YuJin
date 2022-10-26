import { Request, Response } from "express";
import { getData, postLike, postSubscribe } from "../services"

const getVideoData = async (req: Request, res: Response) => {
    const { videoId } = req.params;

    const videoData = await getData(videoId);

    if (!videoData) {
        return res.status(404).json({ status: 404, message: "찾을 수 없음" });
    }
    return res.status(200).json({ status: 200, message: "조회 성공", videoData })
}

const clickLike = async (req: Request, res: Response) => {
    const { videoId } = req.params;

    const videoData = await getData(videoId);

    if (!videoData) {
        return res.status(404).json({ status: 404, message: "찾을 수 없음" });
    }

    const like = await postLike(videoId);

    return res.status(200).json({ status: 200, message: "좋아요 버튼 클릭함", like })
}

const clickSubscribe = async (req: Request, res: Response) => {
    const { videoId } = req.params;

    const subscribe = await postSubscribe(videoId);
    return res.status(200).json({ status: 200, message: "구독 버튼 클릭함", subscribe })
}

export { getVideoData, clickLike, clickSubscribe }