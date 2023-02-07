import {Composer} from 'telegraf';
import ExpertRegistrationText from "../role/expert/registration/text.js";
import Queries from "../database/main_service.js";
import ExpertRegistrationCallback from "../role/expert/registration/callback.js";
import {CallbackLogger, MessageLogger} from "../utils/logs.js";

const mainRouter = new Composer();

// const query = new Queries()
// query.runAutoModels()

class Router extends Queries {
  constructor(ctx) {
    super();
    this.ctx = ctx;
    this.firstName = ctx.from.first_name;
    this.lastName = ctx.from.last_name;
    this.username = ctx.from.username;
    this.userId = ctx.from.id;
  }

  messageInit() {
    this.text = this.ctx.message.text
    this.messageId = this.ctx.message.message_id;
    this.logger = new MessageLogger(this.ctx);
  }

  callbackInit() {
    this.callback = this.ctx.callbackQuery.data
    this.messageId = this.ctx.callbackQuery.message.message_id
    this.logger = new CallbackLogger(this.ctx);
  }

  async textHandler(ctx) {
    this.messageInit()
    let expert = await this.getExpert(this.userId)
    if (!expert) {
      expert = await this.createExpert(this.firstName, this.lastName, this.username, this.userId)
    }
    this.logger.routerLog(expert.state)
    const expertReg = new ExpertRegistrationText(ctx, expert)
    return expertReg.handler()
  }

  async callbackHandler() {
    this.callbackInit()
    let expert = await this.getExpert(this.userId)
    if (!expert) {
      expert = await this.createExpert(this.firstName, this.lastName, this.username, this.userId)
    }
    this.logger.routerLog(expert.state)
    if (this.callback.startsWith('e-reg/')) {
      const expertReg = new ExpertRegistrationCallback(this.ctx, expert)
      await expertReg.handler()
    }
    return this.ctx.answerCbQuery()
  }
}


mainRouter.on('message', async ctx => {
  try {
    if ('text' in ctx.update.message) {
      const mainRouter = new Router(ctx)
      return mainRouter.textHandler(ctx)
    }
  } catch (e) {
    console.log(e);
  }
})

mainRouter.on('callback_query', async ctx => {
  try {
    // await ctx.answerCbQuery();
    const mainRouter = new Router(ctx)
    return mainRouter.callbackHandler()
  } catch (e) {
    console.log(e)
  }
})


export default mainRouter;