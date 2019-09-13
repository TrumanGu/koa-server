import Koa2 from 'koa'
import KoaBody from 'koa-body'
import KoaStatic from 'koa-static2'
import { System as SystemConfig } from './config'
import path from 'path'
import MainRoutes from './routes'
import ErrorRoutesCatch from './middleware/ErrorRoutesCatch'
import ErrorRoute from './routes/error-route'
import jwt from 'koa-jwt'
import fs from 'fs'
import './lib/sequelize'
import logger from 'koa-logger'
import ResponseData from './middleware/ResponseData'
import UserAuth from './middleware/UserAuth'
import CorsRequest from './middleware/CorsRequest'
import views from 'koa-views';


const app = new Koa2()
const env = process.env.NODE_ENV || 'development'

const publicKey = fs.readFileSync(path.join(__dirname, '../publicKey.pub'))

if (env === 'development') {

    app.use(logger())
    app.use(CorsRequest)
}

app
    .use(views(path.join(__dirname, './views'), {
        extension: 'ejs'
    }))
    // .use(views('views', { map: { html: 'ejs' } }))
    .use(ResponseData)
    .use(ErrorRoutesCatch())
    .use(KoaStatic('assets', path.resolve(__dirname, '../assets')))
    .use(jwt({ secret: publicKey }).unless({ path: [/^\/public|\/user\/login|\/assets/] }))
    .use(KoaBody({
        multipart: true,
        strict: false,
        formidable: {
            uploadDir: path.join(__dirname, '../assets/uploads/tmp')
        },
        jsonLimit: '10mb',
        formLimit: '10mb',
        textLimit: '10mb'
    }))
    // .use(PluginLoader(SystemConfig.System_plugin_path))
    .use(UserAuth)
    .use(MainRoutes.routes())
    .use(MainRoutes.allowedMethods())
    .use(ErrorRoute())

app.listen(SystemConfig.API_server_port)

console.log('Now start API server on port ' + SystemConfig.API_server_port + '...')

export default app