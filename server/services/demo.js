import { Service } from 'zan-node';

class DemoService extends Service {

    constructor(ctx) {
        super(arguments);
        this.ctx = ctx;
    }

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
    }

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

    async updateById(id, data) {
        return {
            code: 0,
            msg: '更新成功',
            data: {
                id: 3,
                title: 'update todo title',
                description: 'update todo description'
            }
        };
    }

    async deleteById(id) {
        return {
            code: 0,
            msg: '删除成功',
            data: {
                id: 4,
                title: 'delete todo title',
                description: 'delete todo description'
            }
        };
    }

}

export default DemoService;
