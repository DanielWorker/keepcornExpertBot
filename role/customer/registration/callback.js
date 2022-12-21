import {callbackUtils as utils} from "../../../utils/callback_utils.js";
import {getImageBot} from "../../../utils/main_utils.js";
import {customerRegistrationCaptions as captions} from "./captions.js";
import MessageRender from "../../../utils/render.js";


export default class CustomerRegistrationCallback {
  constructor(ctx) {
    this.ctx = ctx
    this.render = new MessageRender(ctx)
  }

  async init() {
    utils.callbackInit(this.ctx)
  }

  async handler() {
    await this.init()

  }
}