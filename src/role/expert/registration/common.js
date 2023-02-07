import Queries from "../../../database/main_service.js";
import path from "path";
import {profileKbGen} from "./keyboards.js";
import MessageRender from "../../../utils/render.js";
import {updateStateMessages} from "../../../utils/main_utils.js";


export default class ExpertProfileCommon extends Queries {
  constructor(ctx, expert) {
    super();
    this.ctx = ctx;
    this.firstName = ctx.from.first_name;
    this.username = ctx.from.username;
    this.userId = ctx.from.id;
    this.text = ctx.callbackQuery ? null : ctx.message.text;
    this.messageId = ctx.callbackQuery
      ? ctx.callbackQuery.message.message_id
      : ctx.message.message_id;
    this.render = new MessageRender(ctx)
    this.expert = expert;
    this.messagesId = this.expert.messagesId ? JSON.parse(this.expert.messagesId) : [];
  }

  /**
   * Нужно что бы эта функция присылала/изменяла профиль, отсылала доп сообщения
   * Так же нужна функция должна
   * @param isEdited
   * @returns {Promise<*>}
   */
  async sendFullProfile(isEdited) {
    await this.editProfileMessage(isEdited)
    return this.sendProfileMessages()
  }

  async sendFullEditedProfile(profileMsgId) {
    await this.editProfileMessageDirectly(profileMsgId)
    return this.sendProfileMessages()
  }

  async editProfileMessage(isEdited) {
    const data = this.getProfileData()
    const buttons = profileKbGen(this.expert)
    if (!isEdited) {
      return this.expert.update({state: `expert_profile/${this.messageId}`})
    }
    return this.render.editMenu(data.photo, data.text, buttons.profile)
      .then(res => this.expert.update({state: `expert_profile/${res.message_id}`}));
  }

  async editProfileMessageDirectly(profileMsgId) {
    const data = this.getProfileData()
    const buttons = profileKbGen(this.expert)
    return this.render.editMenuById(this.userId, profileMsgId, data.photo, data.text, buttons.profile)
      .then(res => this.expert.update({state: `expert_profile/${res.message_id}`}));
  }

  async sendProfileMessages() {
    const buttons = profileKbGen(this.expert)
    const firstMessageId = await this.ctx.replyWithMarkdown(
      '*LVL*',
      {reply_markup: {inline_keyboard: buttons.lvl}}
    ).then(res => res.message_id);
    const secondMessageId = await this.ctx.replyWithMarkdown(
      '*Net worth*',
      {reply_markup: {inline_keyboard: buttons.netWorth}}
    ).then(res => res.message_id);
    return updateStateMessages([firstMessageId, secondMessageId], this.expert)
  }

  getProfileData() {
    const photo = path.resolve("assets", `images/expert/profile/${this.userId}/${this.expert.photo}.jpg`);
    const text = `💻 Кабинет\n👨🏼 ${this.expert.firstName} ${this.expert.lastName ? this.expert.lastName : ''}`
    return {photo: photo, text: text}
  }
}