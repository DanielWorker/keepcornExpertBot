export default class MessageRender {
  constructor(ctx) {
    this.ctx = ctx;
  }

  /**
   * @param {String} source
   * @param {StringHTML} caption
   * @param {Array} keyboard
   * @returns edit last same content message with image, caption, keyboard
   */
  async editMenu(source, caption, keyboard) {
    return this.ctx.editMessageMedia(
      {
        type: 'photo',
        media: {source: source},
        caption: caption,
        parse_mode: 'HTML',
      },
      {reply_markup: {inline_keyboard: keyboard}}
    );
  }

  /**
   * @param {String} source
   * @param {StringHTML} caption
   * @param {Array} keyboard
   * @returns edit message with image, caption, keyboard
   */
  async editMenuById(chatId, messageId, source, caption, keyboard) {
    return this.ctx.telegram.editMessageMedia(
      chatId,
      messageId,
      undefined,
      {
        type: 'photo',
        media: {source: source},
        caption: caption,
        parse_mode: 'HTML',
      },
      {reply_markup: {inline_keyboard: keyboard}}
    );
  }

  /**
   * @param {String} source
   * @param {string} caption
   * @param {Array} keyboard
   * @returns send message with image, caption, keyboard
   */
  async sendMenu(source, caption, keyboard) {
    return this.ctx.replyWithPhoto(
      {source: source},
      {
        caption: caption,
        parse_mode: 'HTML',
        reply_markup: {inline_keyboard: keyboard},
      }
    );
  }

  async sendMenuById(chatId, source, caption, keyboard) {
    return this.ctx.telegram.sendPhoto(
      chatId,
      {source: source},
      {
        caption: caption,
        parse_mode: 'HTML',
        reply_markup: {inline_keyboard: keyboard},
      }
    );
  }

  /**
   * @param {Number} chatId
   * @param {Number} messageId
   * @param {String} caption
   * @param {Array} keyboard
   * @returns edit caption by id with keyboard
   */
  async editCaptionById(chatId, messageId, caption, keyboard) {
    return this.ctx.telegram.editMessageCaption(chatId, Number(messageId), undefined, caption, {
      parse_mode: 'HTML',
      reply_markup: {inline_keyboard: keyboard},
    });
  }

  /**
   * @param {String} caption
   * @param {Array} keyboard
   * @returns edit caption with keyboard
   */
  async editCaption(caption, keyboard) {
    return this.ctx.editMessageCaption(caption, {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: keyboard,
      },
    });

  }

  /**
   * @param {String} text
   * @returns send pop-up to current chat
   */
  async sendAlert(text) {
    return this.ctx.answerCbQuery(text, {show_alert: true});
  }

  /**
   * @param {Array} keyboard
   * @returns edit last keyboard in chat
   */
  async editKeyboard(keyboard) {
    return this.ctx.editMessageReplyMarkup({inline_keyboard: keyboard});
  }

  async editKeyboardById(userId, messageId, keyboard) {
    return this.ctx.telegram.editMessageReplyMarkup(userId, messageId,
      undefined, {inline_keyboard: keyboard})
  }

  /**
   * @returns removes last keyboard in chat
   */
  async removeKeyboard() {
    return this.ctx.editMessageReplyMarkup({reply_markup: {remove_keyboard: true}});
  }

  /**
   *
   * @param userId
   * @param messageId
   * @returns removes keyboard from message by message_id
   */
  async removeKbById(userId, messageId) {
    return this.ctx.telegram.editMessageReplyMarkup(userId, messageId,
      undefined, {reply_markup: {remove_keyboard: true}}
    );
  }
}
