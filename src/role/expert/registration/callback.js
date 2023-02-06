import { getImageBot, getUserPhoto} from "../../../utils/main_utils.js";
import {expertRegistrationCaptions as captions} from "./captions.js";
import Queries from "../../../database/main_service.js";
import MessageRender from "../../../utils/render.js";


export default class ExpertRegistrationCallback extends Queries {
  constructor(ctx) {
    super();
    this.ctx = ctx;
    this.userId = ctx.from.id;
    this.username = ctx.from.username;
    this.firstName = ctx.from.first_name;
    this.lastName = ctx.from.last_name
    this.callback = ctx.callbackQuery
      ? ctx.callbackQuery.data.split('/').slice(1).join('/')
      : 'empty_callback';
    this.messageId = ctx.callbackQuery ? ctx.callbackQuery.message.message_id : null;
    this.render = new MessageRender(ctx)
  }

  async handler() {
    if (this.callback === 'start') {
      return this.createExpertProfile()
    }
  }

  async createExpertProfile() {
    const expert = await this.createExpert(this.firstName, this.lastName, this.username, this.userId)
    const profilePhoto = await getUserPhoto(this.ctx, this.userId)
    await expert.update({photo: profilePhoto})
  }
}