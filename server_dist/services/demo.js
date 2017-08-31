'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _zanNode = require('zan-node');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let DemoService = class DemoService extends _zanNode.Service {

    constructor(ctx) {
        super(arguments);
        this.ctx = ctx;
    }

    findById(id) {
        return _asyncToGenerator(function* () {
            return {
                code: 0,
                msg: 'ok',
                data: {
                    id: 1,
                    title: 'todo title',
                    description: 'todo description'
                }
            };
        })();
    }

    create(data) {
        return _asyncToGenerator(function* () {
            return {
                code: 0,
                msg: '新建成功',
                data: {
                    id: 2,
                    title: 'new todo title',
                    description: 'new todo description'
                }
            };
        })();
    }

    updateById(id, data) {
        return _asyncToGenerator(function* () {
            return {
                code: 0,
                msg: '更新成功',
                data: {
                    id: 3,
                    title: 'update todo title',
                    description: 'update todo description'
                }
            };
        })();
    }

    deleteById(id) {
        return _asyncToGenerator(function* () {
            return {
                code: 0,
                msg: '删除成功',
                data: {
                    id: 4,
                    title: 'delete todo title',
                    description: 'delete todo description'
                }
            };
        })();
    }

};
exports.default = DemoService;