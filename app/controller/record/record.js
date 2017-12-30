const Model = require('../../mocks/article/list')
const createRule = {
  // comp_id: 1,
  // x: 1,
  // y: 1,
  // z: 1,
  // v: 0,
  // a: 0,
  // x_angel: 0,
  // y_angel: 0,
  // z_angel: 0,
  // created_at: 1514585922801,
  // updated_at: 1514585922801
  //
  // accesstoken: 'string',
  // title: 'string',
  // tab: {type: 'enum', values: ['ask', 'share', 'job'], required: false},
  // content: 'string'
}
module.exports = app => {
  return class UploaderController extends app.Controller {
    async index() {
      const {ctx, ctx: {params}} = this
      const res = await ctx.service.record.get(params.id)
      ctx.body = res
    }

    async record() {
      const {ctx, ctx: {request: {body}}} = this
      // ctx.validate(createRule)
      const res = await ctx.service.record.save({
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
        ...body
      })
      // 设置响应体和状态码
      ctx.body = {
        success: res
      }
    }

    async all() {
      const {ctx} = this
      const res = await ctx.service.record.all()
      ctx.body = res
    }
  }

}