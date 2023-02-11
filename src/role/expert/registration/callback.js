import {
  cleanStateMessages,
  delete2LastMessages,
  getImageBot,
  getUserPhoto,
  updateStateMessages
} from "../../../utils/main_utils.js";
import Queries from "../../../database/main_service.js";
import MessageRender from "../../../utils/render.js";
import ExpertProfileCommon from "./common.js";


export default class ExpertRegistrationCallback extends Queries {
  constructor(ctx, expert) {
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
    this.common = new ExpertProfileCommon(ctx, expert)
    this.expert = expert;
    this.messagesId = this.expert.messagesId ? JSON.parse(this.expert.messagesId) : [];
  }

  async handler() {
    if (this.callback === 'expert_profile') {
      return this.expertProfile()
    }
    if (this.callback.startsWith('edit_profile/')) {
      const field = this.callback.split('/')[1]
      if (this.expert.state.startsWith('edit_profile/')) {
        await cleanStateMessages(this.ctx, this.messagesId, this.expert)
        const [ firstMessageId, secondMessageId, thirdMessageId] = this.expert.state.split('/').slice(2)
        return this.editProfile(field, firstMessageId, secondMessageId, thirdMessageId)
      } else {
        const [firstMessageId, secondMessageId, thirdMessageId] = this.expert.state.split('/').slice(1)
        return this.editProfile(field, firstMessageId, secondMessageId, thirdMessageId)
      }
    }
    if (this.callback.startsWith('approve_location/')) {
      const timezone = this.callback.split('/')[1]
      return this.locationApproved(timezone)
    }
    if (this.callback === 'back_to_input_location') {
      return delete2LastMessages(this.ctx, this.expert);
    }
  }

  async expertProfile() {
    if (!this.expert.photo) {
      const profilePhoto = await getUserPhoto(this.ctx, this.userId)
      await this.expert.update({photo: profilePhoto})
    }
    return this.common.sendFullProfile()
  }

  async locationApproved(timezone) {
    await this.expert.update({timezone: timezone});
    await cleanStateMessages(this.ctx, this.messagesId, this.expert);
    const includeArray = [
      this.expert.birthday, this.expert.city, this.expert.timezone, this.expert.email,
      this.expert.techItems, this.expert.internetSpeed, this.expert.crypto
    ]
    if (!includeArray.includes(null)) {
      // do something
    }
    // остальное
    const [field, firstMessageId, secondMessageId, thirdMessageId] = this.expert.state.split('/').slice(1)
    return this.common.editProfileMessage(field, firstMessageId, secondMessageId, thirdMessageId)
  }


  async editProfile(field, firstMessageId, secondMessageId, thirdMessageId) {
    let text, state, photo;
    switch (field) {
      case 'birthday':
        text = "*🚸 Введите: дату рождения*\n_Например: 17.04.1998_"
        state = `edit_profile/birthday/${firstMessageId}/${secondMessageId}/${thirdMessageId}`
        break;
      case 'city':
        text = "*🗺 Введите Город*\n_Пример: Россия, Москва_"
        state = `edit_profile/city/${firstMessageId}/${secondMessageId}/${thirdMessageId}`
        break;
      case 'email':
        text = "*✉️ Введите почту*\n_Пример: faldincreator@gmail.com_"
        state = `edit_profile/email/${firstMessageId}/${secondMessageId}/${thirdMessageId}`
        break;
      case 'techItems':
        text = "*🧑🏻‍💻 Введите имя вашего рабочего устройства*\n_Пример: Macbook Pro_"
        state = `edit_profile/techItems/${firstMessageId}/${secondMessageId}/${thirdMessageId}`
        break;
      case 'internetSpeed':
        text = "*🌐 Введите скорость вашего интернета\n\nhttps://www.speedtest.net/*\n\n_Пример: 250_"
        state = `edit_profile/internetSpeed/${firstMessageId}/${secondMessageId}/${thirdMessageId}`
        photo = getImageBot('internet_speed')
        break;
      case 'crypto':
        text = "*🌐 Введите адрес вашего электронного кошелька*\n_Пример: bc1qxmsrcs6h5p8x36t0c3kj5yhnrs0jkrdtc6hg39_"
        state = `edit_profile/crypto/${firstMessageId}/${secondMessageId}/${thirdMessageId}`
        break;
    }
    await this.expert.update({state: state})
    if (typeof photo !== 'undefined') {
      return this.ctx.replyWithPhoto({source: photo}, {caption: text, parse_mode: 'Markdown'})
        .then(res => updateStateMessages([res.message_id], this.expert));
    } else {
      return this.ctx.replyWithMarkdown(text)
        .then(res => updateStateMessages([res.message_id], this.expert));
    }
  }
}