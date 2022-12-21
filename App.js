import {Telegraf} from 'telegraf';
import dotenv from 'dotenv';
import mainRouter from './router/router.js'

dotenv.config();
// Answer payments provider



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