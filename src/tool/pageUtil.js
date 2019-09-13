/**
 * 取得分页的开始结束位置
 * @param {*当前第几页} pageNum
 * @param {*一页多少条数据} itemsPerPage  
 */
export function pageInfo(pageNum = 1, itemsPerPage = 10) {
    const page = Number(pageNum)
    const start = (page - 1) * itemsPerPage
    const end = page * itemsPerPage
    return { start, end }
}

/**
 * MySQL取得分页的信息
 * @param {*当前第几页} pageNum
 * @param {*一页多少条数据} itemsPerPage
 * @return limit // 每页多少条
 * @return offset // 跳过多少条
 */
export function mysqlPageInfo(pageNum = 0, itemsPerPage = 12) {
    const page = Number(pageNum)
    const offset = Number(page * itemsPerPage)
    return { offset, limit: Number(itemsPerPage) }
}