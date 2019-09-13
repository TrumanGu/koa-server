export default {
    get: async(ctx) => {
        return await ctx.render('index')
    }
}