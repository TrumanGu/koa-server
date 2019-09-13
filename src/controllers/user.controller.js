import md5 from 'md5'
import { User } from '../models'
// import { User, TodoList } from '../models'
import { createToken, getAuthInfo } from '../services/userAuth.service'
import { currentDateTime, timestamp } from '../tool/dateUtil'

/*
export let findAllUser = async (ctx) => {
  let users = await models.user.User.findAll()
  ctx.body = users
}

export let findOneById = async (ctx) => {
  // let user = await models.user.User.findById(ctx.query.id)
  // ctx.body = user
  var userid = ctx.query.id
  try {
    const user = await models.user.User.findById(userid)
    user ? ctx.success(user) : ctx.notFound('不能找到用户检查id', {id: userid})
  } catch (err) {
    ctx.error(err.toString(), {id: userid})
  }
}
*/
export default {
    getUsers: async(ctx) => {
        try {
            let users = await User.findAll({
                    attributes: { exclude: ['password', 'is_delete', 'timestamp_at'] } // 不包含的列
                }) // 没有关联关系
                // let users = await User.findAll({
                //   include: [ TodoList ], // 关联表不带查询条件
                //   // include: [{
                //   //   TodoList,
                //   //   where: { id: 2 } // 关联表带查询条件,查询条件不好用。不知道为什么
                //   // }],
                //   where: {
                //     id: 1 // 查询user表的条件
                //   }
                // }) // 有关联关系1:m
            ctx.success(users)
        } catch (err) {
            ctx.error('查询全部用户出错', err)
        }
    },

    getUser: async(ctx) => {
        let userid = ctx.params.id
        try {
            const user = await User.findById(userid)
            user ? ctx.success(user) : ctx.notFound('用户不存在', { id: userid })
        } catch (err) {
            ctx.error('查询用户出错', err, { id: userid })
        }
    },

    login: async(ctx) => {
        let username = ctx.request.body.username
        let password = md5(ctx.request.body.password)
        try {
            const user = await User.findOne({
                attributes: ['id', 'username'],
                where: { username, password, is_delete: 0 }
            })
            if (user) {
                // 取得用户数据,根据model的dataValues属性
                const u = user.dataValues
                const id = user.id
                    // 用户登陆后只返回token,客户端根据token取得用户信息
                const token = createToken(u)
                ctx.success({ token, id }, '用户登录成功')
            } else {
                ctx.notFound('用户名或者密码错误!', { username, password })
            }
        } catch (err) {
            ctx.error('用户登录出错', err, { username, password })
        }
    },

    register: async(ctx) => {
        let newUser = {
            username: ctx.request.body.username,
            password: md5(ctx.request.body.password),
            created_at: currentDateTime(),
            updated_at: currentDateTime(),
            is_delete: false,
            timestamp_at: timestamp()
        }
        try {
            await User.create(newUser)
            ctx.success(null, '用户注册成功')
        } catch (err) {
            ctx.error('用户注册出错', err, newUser)
        }
    },
}