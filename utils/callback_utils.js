

export const callbackUtils = {
  callbackInit(ctx) {
    this.ctx = ctx;
    this.userId = ctx.from.id;
    this.username = ctx.from.username;
    this.firstName = ctx.from.first_name;
    this.callback = ctx.callbackQuery
      ? ctx.callbackQuery.data.split('/').slice(1).join('/')
      : 'empty_callback';
    this.messageId = ctx.callbackQuery ? ctx.callbackQuery.message.message_id : null;
  }
}