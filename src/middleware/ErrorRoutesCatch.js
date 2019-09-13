module.exports = function() {
    return function(ctx, next) {
        return next().catch((err) => {
            switch (err.status) {
                case 401:
                    ctx.error('Authentication Error', 'Protected resource, use Authorization header to get access', null, 401)
                    break
                default:
                    throw err
            }
        })
    }
}