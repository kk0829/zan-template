/**
 * Service 层写法1
 */
import log from '../decorators/log';

const DemoService = {

    @log()
    async findById(id) {
        return {
            code: 0,
            msg: 'ok',
            data: {
                id: 1,
                title: 'todo title',
                description: 'todo description'
            }
        };
    },

    async create(data) {
        return {
            code: 0,
            msg: '新建成功',
            data: {
                id: 2,
                title: 'new todo title',
                description: 'new todo description'
            }
        };
    }

};

module.exports = DemoService;
