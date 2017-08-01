import auth from '../policies/auth';
import IndexController from '../controllers/index';
import { router } from 'zan-node';

router.get('/', auth, IndexController.getIndexHtml);

module.exports = router;