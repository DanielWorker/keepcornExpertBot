import {Telegraf} from 'telegraf';
import dotenv from 'dotenv';
import mainRouter from './src/router/router.js'
// import Queries from "./src/database/main_service.js";

dotenv.config();

// const query = new Queries()
// query.runAutoModels()

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.launch();
bot.use(mainRouter);

bot.on('pre_checkout_query', async ctx => await ctx.answerPreCheckoutQuery(true));

// Enable graceful stop

process.once('SIGINT', () => {
  bot.stop('SIGINT');
});
process.once('SIGTERM', () => {
  bot.stop('SIGTERM');
});

export default bot;