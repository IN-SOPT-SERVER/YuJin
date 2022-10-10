import express, { Request, Response, Router } from "express";
import { movies } from "./data/movie";
const router: Router = express.Router();


router.get("/", (req: Request, res: Response) => {

    return res.status(200).json({
        status: 200,
        message: "전체 영화 조회 성공",
        data: movies
    });
});

router.get("/:movieGenre", (req: Request, res: Response) => {

    const movieGenre = req.params.movieGenre.toString();

    const findGenre = movies.filter(m => m.genre === movieGenre);

    if (findGenre.length === 0)
        return res.status(404).json({
            status: 404,
            message: "없다"
        })

    return res.status(200).json({
        status: 200,
        message: "검색한 장르 영화 조회 성공",
        data: findGenre,
    });
});

module.exports = router;