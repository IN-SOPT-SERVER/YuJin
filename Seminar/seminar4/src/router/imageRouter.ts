import { Router } from "express";
import { upload } from "../middlewares";
import { imageController } from "../controller";

const router: Router = Router();
// single : 단일 파일
// 여러개의 image : array
// single안에 어떤 필드명으로 이미지를 넘겨줄건지 이름을 정함
router.post('/', upload.single('file'), imageController.uploadImage);

export default router;
