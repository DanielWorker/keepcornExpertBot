import MessageRender from "../../../utils/render.js";
import {
  cleanStateMessages,
  getAge,
  getCoordinates,
  getImageBot,
  updateStateMessages
} from "../../../utils/main_utils.js";
import {expertRegistrationCaptions as captions} from "./captions.js";
import {expertRegistrationKb as kb} from "./keyboards.js";
import ExpertProfileCommon from "./common.js";


export default class ExpertRegistrationText {
  constructor(ctx, expert) {
    this.ctx = ctx
    this.firstName = ctx.message.from.first_name;
    this.userId = ctx.message.from.id;
    this.messageId = ctx.message.message_id;
    this.text = ctx.message.text;
    this.render = new MessageRender(ctx)
    this.expert = expert;
    this.messagesId = this.expert.messagesId ? JSON.parse(this.expert.messagesId) : [];
    this.common = new ExpertProfileCommon(ctx, expert)
  }

  async handler() {
    if (this.text === '/start') {
      return this.startMenuSend()
    }
    return this.stateHandler()
  }

  async stateHandler() {
    if (this.expert.state.startsWith('edit_profile/')) {
      const [field, firstMessageId, secondMessageId, thirdMessageId] = this.expert.state.split('/').slice(1);
      return this.editProfile(field, firstMessageId, secondMessageId, thirdMessageId);
    }
  }

  async startMenuSend() {
    const image = getImageBot('registration')
    const text = captions.welcome
    await this.render.sendMenu(image, text, kb.startKb)
  }

  async editProfile(field, firstMessageId, secondMessageId, thirdMessageId) {
    let city;
    switch (field) {
      case 'birthday': {
        const isMatch = this.text.match(/^\d{2}\.\d{2}\.\d{4}$/);
        if (!isMatch) {
          await this.ctx
            .reply('Неверный формат')
            .then(res => this.messagesId.push(res.message_id, this.messageId));
          return updateStateMessages(this.messagesId, this.expert);
        }
        let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
        let birthDate = new Date(this.text.replace(pattern, '$3-$2-$1'));
        const age = getAge(birthDate);
        if (age < 18) {
          await this.ctx
            .reply('Тебе недостаточно лет')
            .then(res => this.messagesId.push(res.message_id, this.messageId));
          return updateStateMessages(this.messagesId, this.expert);
        }
        await this.expert.update({birthday: birthDate});
        break;
      }
      case 'city':
        city = await getCoordinates(this.text);
        if (!city) {
          await this.ctx
            .reply('Ничего не найдено')
            .then(res => this.messagesId.push(res.message_id, this.messageId));
          return updateStateMessages(this.messagesId, this.expert);
        }
        await this.expert.update({city: this.text});
        return this.common.setProfileCity(city.lat, city.lon);
      case 'email':
        await this.expert.update({email: this.text});
        break;
      case 'techItems':
        await this.expert.update({techItems: this.text});
        break;
      case 'internetSpeed':
        await this.expert.update({internetSpeed: this.text});
        break;
      case 'crypto':
        await this.expert.update({crypto: this.text});
        break;
    }
    this.messagesId.push(this.messageId);
    await cleanStateMessages(this.ctx, this.messagesId, this.expert);
    const includeArray = [
      this.expert.birthday, this.expert.city, this.expert.timezone, this.expert.email,
      this.expert.techItems, this.expert.internetSpeed, this.expert.crypto
    ]
    if (!includeArray.includes(null)) {
      // do something
    }
    return this.common.editProfileMessage(field, firstMessageId, secondMessageId, thirdMessageId)
  }
}