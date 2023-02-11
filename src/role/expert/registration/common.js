import Queries from "../../../database/main_service.js";
import path from "path";
import {profileKbGen} from "./keyboards.js";
import MessageRender from "../../../utils/render.js";
import {getUserUTC, updateStateMessages} from "../../../utils/main_utils.js";
import {DateTime} from "luxon";
import * as kb from "./keyboards.js";


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

  async sendFullProfile() {
    const data = this.getProfileData()
    const buttons = profileKbGen(this.expert)
    const firstMessageId = await this.render.editMenu(data.photo, data.text, buttons.profile)
      .then(res => res.message_id);
    const secondMessageId = await this.ctx.replyWithMarkdown(
      '*LVL*',
      {reply_markup: {inline_keyboard: buttons.lvl}}
    ).then(res => res.message_id);
    const thirdMessageId = await this.ctx.replyWithMarkdown(
      '*Net worth*',
      {reply_markup: {inline_keyboard: buttons.netWorth}}
    ).then(res => res.message_id);
    return this.expert.update({state: `expert_profile/${firstMessageId}/${secondMessageId}/${thirdMessageId}`})
  }

  async editProfileMessage(field, firstMessageId, secondMessageId, thirdMessageId) {
    const buttons = profileKbGen(this.expert)
    // определить в какой части был совершен апдейт, то сообщение и обновить .filter(i => i == field).length > 0
    const fieldsObj = {0: ['birthday', 'city', 'email'], 1: ['techItems', 'internetSpeed'], 2: ['crypto']}
    let editMessageId, kb;
    for (let index in fieldsObj) {
      if (fieldsObj[index].includes(field)) {
        switch (index) {
          case '0':
            editMessageId = firstMessageId
            kb = buttons.profile
            break;
          case '1':
            editMessageId = secondMessageId
            kb = buttons.lvl
            break;
          case '2':
            editMessageId = thirdMessageId
            kb = buttons.netWorth
            break;
        }
      }
    }
    return this.render.editKeyboardById(this.userId, editMessageId, kb)
      .then(() => this.expert.update({state: `expert_profile/${firstMessageId}/${secondMessageId}/${thirdMessageId}`}))
  }

  async setProfileCity(latitude, longitude) {
    const userZone = getUserUTC(latitude, longitude);
    const time = DateTime.fromObject({}, {zone: userZone}).toFormat('HH:mm');
    const buttons = kb.approveLocation(userZone)
    await this.ctx.replyWithHTML(`<b>Ваше текущее время:\n${time}, Верно?</b>`, {reply_markup: {inline_keyboard: buttons}})
      .then(res => this.messagesId.push(res.message_id, this.messageId))
    return updateStateMessages(this.messagesId, this.expert)
  }

  getProfileData() {
    const photo = path.resolve("assets", `images/expert/profile/${this.userId}/${this.expert.photo}.jpg`);
    const text = `💻 Кабинет\n👨🏼 ${this.expert.firstName} ${this.expert.lastName ? this.expert.lastName : ''}`
    return {photo: photo, text: text}
  }
}