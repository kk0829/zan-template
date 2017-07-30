import { BusinessError, ParamsError } from '@youzan/zan';

module.exports = async(ctx, next) => {
    try {
        await next();
    } catch (e) {
        if (e instanceof BusinessError) {
            console.log(e.errorContent);
            // TODO
        } else if (e instanceof ParamsError) {
            console.log(e.errorContent);
            // TODO
        } else {
            throw new Error(e);
        }
    }
};