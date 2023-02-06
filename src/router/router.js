import {Composer} from 'telegraf';
import ExpertRegistrationText from "../role/expert/registration/text.js";
import Queries from "../database/main_service.js";
// import Queries from "../database/main_service.js";

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

  async messageInit() {
    this.text = this.ctx.message.text
    this.messageId = this.ctx.message.message_id;
  }

  async callbackInit() {
    this.callback = this.ctx.callbackQuery.data
    this.messageId = this.ctx.callbackQuery.message.message_id
  }

  async textHandler(ctx) {
    await this.messageInit()
    const expert = await this.getExpert(this.userId)
    if (!expert) {
      const expertReg = new ExpertRegistrationText(ctx)
      return expertReg.handler()
    }
  }

  async callbackHandler() {
    await this.callbackInit()
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