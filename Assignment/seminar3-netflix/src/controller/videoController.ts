import { Request, Response } from "express";
import { videoService } from "../services";

const createVideo = async (req: Request, res: Response) => {
    const { title, preview, is_series, actors } = req.body

    if (!title || !preview || !is_series || !actors) {
        return res.status(400).json({ status: 400, message: "생성 실패" });
    }

    const data = await videoService.createData(title, preview, is_series, actors);

    if (!data) {
        return res.status(400).json({ status: 400, message: "데이터 생성 실패" });
    }

    return res.status(200).json({ status: 200, message: "데이터 생성 성공", data });
};

//* 유저 전체 조회
const getAllData = async (req: Request, res: Response) => {
    const data = await videoService.getData();
    console.log(data);
    return res.status(200).json({ status: 200, message: "전체 조회 성공", data });
};

//* 유저 정보 업데이트
const updateLike = async (req: Request, res: Response) => {
    const { like } = req.body;
    const { video_id } = req.params;

    if (!like) return res.status(400).json({ status: 400, message: "업데이트 실패" });

    const updateLike = await videoService.updateLike(+video_id, like);
    return res.status(200).json({ status: 200, message: "유저 업데이트 성공", updateLike });
};

//* 유저 삭제
const deleteData = async (req: Request, res: Response) => {
    const { video_id } = req.params;

    await videoService.deleteData(+video_id);
    return res.status(200).json({ status: 200, message: "삭제 성공" });
};

const getVideoById = async (req: Request, res: Response) => {
    const { video_id } = req.params;

    const data = await videoService.getVideoById(+video_id);

    if (!data) {
        return res.status(404).json({ status: 404, message: "NOT_FOUND" });
    }

    return res.status(200).json({ status: 200, message: "조회 성공", data });
};

const videoController = {
    createVideo,
    getAllData,
    updateLike,
    deleteData,
    getVideoById,
};

export default videoController;