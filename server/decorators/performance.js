/**
 * 无参 Decorator
 * 统计方法执行时间
 */
export default (target, name, descriptor) => {
    const method = descriptor.value;
    descriptor.value = async(...args) => {
    	const t1 = Date.now();
        const result = await method.apply(target, args);
        const t2 = Date.now();
        console.log(`方法 ${name} 执行时间：${t2 - t1}`);
        return result;
    };
};
