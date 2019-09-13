/**
 * 返回给客户端的状态、消息和json数据
 */
export default async(ctx, next) => {
    ctx.error = (message = '', errMsg = '', result = {}, code = 500) => {
        ctx.body = {
            code,
            message,
            errMsg: '服务器出错,错误信息：' + errMsg,
            result
        }
    }
    ctx.notFound = (message, result = {}) => {
        ctx.body = {
            code: 404,
            message,
            result
        }
    }
    ctx.success = (result, message = 'ok') => {
        ctx.body = {
            code: 200,
            message,
            result
        }
    }
    await next()
}