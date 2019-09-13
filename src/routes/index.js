import userRoute from './user.route'
import fileUpDownRoute from './fileUpDown.route'
import pageRoute from './page.route'
import Router from 'koa-router'

const router = new Router()
    .use(userRoute.routes())
    .use(pageRoute.routes())
    .use(fileUpDownRoute.routes())

router
    .get('/public/get', function(ctx, next) {
        ctx.body = '欢迎~~！'
    }) // 以/public开头则不用经过权限认证

export default router