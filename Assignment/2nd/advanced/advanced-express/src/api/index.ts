import express, { Router } from "express";

const router: Router = express.Router(); // express 라우팅 시스템을 받아올거!

router.use("/user", require("./user"));
router.use("/movie", require("./movie"));
router.use("/blog", require("./blog"));
router.use("/members", require("./members"));
router.use("/comment", require("./comment"));

module.exports = router; // 모듈로 반환