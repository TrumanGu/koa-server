import {getAuthInfo} from '../services/userAuth.service'

/**
 * 从客户端取得token后解码为用户对象
 */
export default async (ctx, next) => {
  let token = ctx.request.header.authorization
  if (token) {
    ctx.userInfo = getAuthInfo(token)
  }
  await next()
}
