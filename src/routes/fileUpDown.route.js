import { FileUpDown } from '../controllers'
import Router from 'koa-router'

const router = new Router({prefix: '/api'})
  .post('/fileupload', FileUpDown.fileUpload)
  .post('/filedownload/:id', FileUpDown.fileDownload)

export default router
