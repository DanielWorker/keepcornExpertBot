import MessageRender from "../../../utils/render.js";
import {getImageBot} from "../../../utils/main_utils.js";
import {customerRegistrationCaptions as captions} from "./captions.js";
import {customerRegistrationKb as kb} from "./keyboards.js";


export default class CustomerRegistrationText {
  constructor(ctx) {
    this.ctx = ctx
    this.firstName = ctx.message.from.first_name;
    this.userId = ctx.message.from.id;
    this.messageId = ctx.message.message_id;
    this.text = ctx.message.text;
    this.render = new MessageRender(ctx)
  }

  async handler() {
    if (this.text === '/start') {
      return this.startMenuSend()
    }
  }

  async startMenuSend() {
    const image = getImageBot('registration')
    const text = captions.welcome
    await this.render.sendMenu(image, text, kb.startKb)
  }
}