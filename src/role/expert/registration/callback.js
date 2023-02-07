import {cleanStateMessages, getUserPhoto, updateStateMessages} from "../../../utils/main_utils.js";
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
      const profileMsgId = this.expert.state.split('/')[1]
      return this.editProfile(field, profileMsgId)
    }
  }

  async expertProfile() {
    if (!this.expert.photo) {
      const profilePhoto = await getUserPhoto(this.ctx, this.userId)
      await this.expert.update({photo: profilePhoto})
    }
    return this.common.sendFullProfile(true)
  }

  async editProfile(field, profileMsgId) {
    let text, state;
    switch (field) {
      case 'birthday':
        text = "*🚸 Введите: дату рождения*\n_Например: 17.04.1998_"
        state = `edit_profile/birthday/${profileMsgId}`
        break;
      case 'city':
        text = "*🗺 Введите Город*\n_Пример: Россия, Москва_"
        state = `edit_profile/city/${profileMsgId}`
        break;
      case 'email':
        text = "*✉️ Введите почту*\n_Пример: faldincreator@gmail.com_"
        state = `edit_profile/email/${profileMsgId}`
        break;
      case 'techItems':
        text = "*🧑🏻‍💻 Введите имя вашего рабочего устройства*\n_Пример: Macbook Pro_"
        state = `edit_profile/techItems/${profileMsgId}`
        break;
      case 'internetSpeed':
        text = "*🌐 Введите скорость вашего интернета*\n_Пример: 250_"
        state = `edit_profile/internetSpeed/${profileMsgId}`
        break;
      case 'crypto':
        text = "*🌐 Введите адрес вашего электронного кошелька*\n_Пример: bc1qxmsrcs6h5p8x36t0c3kj5yhnrs0jkrdtc6hg39_"
        state = `edit_profile/crypto/${profileMsgId}`
        break;
    }
    await cleanStateMessages(this.ctx, this.messagesId, this.expert)
    await this.render.removeKbById(this.userId, profileMsgId)
    await this.expert.update({state: state})
    return this.ctx.replyWithMarkdown(text)
      .then(res => updateStateMessages([res.message_id], this.expert));
  }
}