import Sequelize from 'sequelize'
import { DB as DBConfig, System as SystemConfig } from '../config'

const db = new Sequelize(DBConfig.database, DBConfig.username, DBConfig.password, {
    host: DBConfig.host,
    dialect: SystemConfig.db_type,
    define: {
        underscored: true
    },
    dialectOptions: { // MySQL > 5.5，其它数据库删除此项
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_520_ci',
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool: {
        // max: 50, // 默认设置
        max: 1, // 测试用1
        min: 0,
        idle: 10000
    }
})

db.authenticate()
    .then(() => {
        console.log('连接数据库成功!')
    })
    .catch(err => {
        console.error('不能连接数据库:', err)
    })

export { Sequelize, db }