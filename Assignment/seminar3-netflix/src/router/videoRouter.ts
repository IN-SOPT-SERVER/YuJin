import { Router } from 'express';
import { videoController } from '../controller';

const router: Router = Router();

router.get("/:video_id", videoController.getVideoById);

//* 유저 생성 - POST api/user
router.post('/', videoController.createVideo);

//* 전체 유저 조회 - GET api/ user
router.get('/', videoController.getAllData);

//* 유저 정보 업데이트 - PATCH api/user/:userId
router.patch('/:like', videoController.updateLike);

//* 유저 삭제 - DELETE api/user:userId
router.delete('/:video_id', videoController.deleteData);

export default router;