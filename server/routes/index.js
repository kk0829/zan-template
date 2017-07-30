import auth from '../policies/auth';
import IndexController from '../controllers/index';
import { router } from '@youzan/zan';

router.get('/', auth, IndexController.getIndexHtml);

module.exports = router;