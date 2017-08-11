/**
 * 带参数 Decorator
 * 打印方法执行日志
 */
export default function () {
    return (target, name, descriptor) => {
        const method = descriptor.value;
        descriptor.value = async (...args) => {
            const result = await method.apply(target, args);
            console.log('入参：', args);
            console.log('执行上下文对象：', target);
            console.log('方法：', name);
            console.log('返回值：', result);
            return result;
        };
    };
}
