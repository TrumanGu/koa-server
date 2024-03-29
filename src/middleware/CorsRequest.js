import { System as SystemConfig } from '../config'

/**
 * 跨域请求的处理中间件
 */
export default async(ctx, next) => {
    if (ctx.request.header.host.split(':')[0] === 'localhost' || ctx.request.header.host.split(':')[0] === '127.0.0.1') {
        ctx.set('Access-Control-Allow-Origin', '*')
    } else {
        ctx.set('Access-Control-Allow-Origin', SystemConfig.HTTP_server_host)
    }
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization') // 允许headers使用Authorization
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    ctx.set('Access-Control-Allow-Credentials', true) // 允许带上 cookie
    if (ctx.method === 'OPTIONS') {
        // 返回结果
        ctx.status = 200
        ctx.body = 'options OK'
        return
    }
    return next()
}