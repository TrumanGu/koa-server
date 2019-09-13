import { User } from '../controllers'
import Router from 'koa-router'

const router = new Router({ prefix: '/public/users' })
    .get('/', User.getUsers)
    .get('/:id', User.getUser)
    .post('/login', User.login)
    .post('/register', User.register)
export default router