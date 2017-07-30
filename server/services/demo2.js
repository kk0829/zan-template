/**
 * Service 层写法2
 */

class DemoService {

    constructor(ctx) {
        this.ctx = ctx;
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
