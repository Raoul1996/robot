module.exports = app => {
  return class UserController extends app.Controller {
    async info() {
      const {ctx} = this
      const userId = ctx.params.id
      const userInfo = await ctx.service.user.find(userId)
      ctx.body = userInfo
    }
  }
}