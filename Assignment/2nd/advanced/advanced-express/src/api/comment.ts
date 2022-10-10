import express, { Request, Response, Router } from "express";
import { blogData } from "./data/blogData";
const router: Router = express.Router();

router.post('/', (req, res) => {
    const body = req.body;
    const commentId = parseInt(body.commentId);
    const blogId = parseInt(body.blogId);
    const writer = body.writer;
    const content = body.content;

    if (body) {
        const newComment = { commentId: commentId, blogId: blogId, writer: writer, content: content };

        blogData[blogId - 1]["comment"]?.push(newComment)
    }
})

module.exports = router;