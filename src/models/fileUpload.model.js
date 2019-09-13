import {Sequelize, db} from '../lib/sequelize'

const FileUpload = db.define('fileupload', {
  file_name: { // 文件名
    type: Sequelize.STRING(150)
  },
  ext_name: { // 文件扩展名
    type: Sequelize.STRING(20)
  },
  file_url: { // 文件URL
    type: Sequelize.STRING(300)
  },
  content_type: { // 文件类型
    type: Sequelize.STRING(30)
  },
  created_at: { // 创建日期时间
    type: Sequelize.STRING(30)
  },
  updated_at: { // 更新日期时间
    type: Sequelize.STRING(30)
  },
  timestamp_at: { // 更新时的时间戳
    type: Sequelize.BIGINT
  }
},
{
  timestamps: false,
  comment: '上传文件信息表'
})
// 创建表结构
// FileUpload.sync({force: true})

export default FileUpload
