import express, { Request, Response, Router } from "express";
import { members } from "./data/members";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {

    return res.status(200).json({
        status: 200,
        message: "유저 전체 조회 성공",
        data: members,
    });
});

router.get("/:memberId", (req: Request, res: Response) => {

    const memberId = req.params.memberId;

    let memberData = members.at(parseInt(memberId) - 1);

    if (memberData === undefined) {
        return res.status(404).json({
            status: 404,
            message: "오류! 없는 데이터!",
        })
    }

    return res.status(200).json({
        status: 200,
        message: "검색한 유저 조회 성공",
        data: memberData,
    });
});

module.exports = router;