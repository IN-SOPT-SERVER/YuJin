//* 라우터 : 엔드포인트와 해당 엔드포인트에서 실행돼야할 로직을 연결해주는 역할
import express, { Router } from "express";
import videoRouter from "./videoRouter";

const router: Router = express.Router();

router.use('/video', videoRouter);

module.exports = router;
