import express, { Request, Response, Router } from "express";
import { blogData } from "./data/blogData";
const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {

    return res.status(200).json({
        status: 200,
        message: "블로그 전체 조회 성공",
        data: blogData,
    });
});

router.post('/', (req, res) => {
    const body = req.body;
    const blogId = parseInt(body.blogId);
    const title = body.title;
    const writer = body.writer;
    const content = body.content;

    if (blogId && title && writer && content) {
        const newBlog = { blogId: blogId, title: title, writer: writer, content: content };
        blogData.push(newBlog);
        console.log(blogData);
    }
})

router.get("/:blogId", (req: Request, res: Response) => {

    const blogId = req.params.blogId.toString();

    let data = blogData.filter((value) => value.blogId.toString() === blogId);

    if (data === undefined) {
        return res.status(404).json({
            status: 404,
            message: "오류! 없는 데이터!",
        })
    }

    return res.status(200).json({
        status: 200,
        message: "검색한 블로그 조회 성공",
        data: data,
    });
});

module.exports = router;