import auth from '../policies/auth';
import DemoController from '../controllers/demo';
import { router } from 'zan-node';

// 所有页面请求路径都以 .html 结尾，对应 Controller 方法命名规则 xxxHtml
router.get('/demo.html', auth, DemoController.getDemoHtml);

// 所有 JSON 接口请求路径都以 .json 结尾，对应 Controller 方法命名规则 xxxJson
router.get('/demo/todo/:id(\\d+).json', auth, DemoController.findByIdJson);
router.post('/demo/todo.json', auth, DemoController.createJson);
router.put('/demo/todo/:id(\\d+).json', auth, DemoController.updateByIdJson);
router.delete('/demo/todo/:id(\\d+).json', auth, DemoController.deleteByIdJson);

module.exports = router;