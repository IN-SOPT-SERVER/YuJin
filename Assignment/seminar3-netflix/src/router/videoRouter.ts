import { Router } from 'express';
import { getVideoData, clickLike, clickSubscribe } from '../controller';

const router: Router = Router();

router.get('/preview/:videoId', getVideoData);
router.post('/like/:videoId', clickLike);
router.post('/subscribe/:videoId', clickSubscribe)

export default router;