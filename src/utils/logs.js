export class MessageLogger {
  constructor(ctx) {
    this.userId = ctx.from.id;
    this.username = ctx.from.username;
  }

  routerLog(state) {
    const consoleLogMessage = `——————————————————\nMESSAGE HANDLER\nUser: ${this.username} | ${this.userId}\nState: ${state}`;
    console.log(consoleLogMessage);
  }
}

export class CallbackLogger extends MessageLogger {
  constructor(ctx) {
    super(ctx);
    this.callback = ctx.callbackQuery.data;
  }

  routerLog(state) {
    const consoleLogMessage = `——————————————————\nCALLBACK HANDLER\nUser: ${this.username} | ${this.userId}\nCallback: ${this.callback}\nState: ${state}`;
    console.log(consoleLogMessage);
  }
}
