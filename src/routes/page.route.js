import Router from 'koa-router'
import Page from '../controllers/page.controller'
const router = new Router({ prefix: '/public/page' })
    .get('/', Page.get)

export default router