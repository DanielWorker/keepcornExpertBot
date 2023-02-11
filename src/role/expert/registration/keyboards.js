import {Markup} from 'telegraf';
import Queries from "../../../database/main_service.js";

const query = new Queries()

// [Markup.button.callback(`👈🏻 Назад`, `c-a/back`)]

export const expertRegistrationKb = {
  startKb: [
    [Markup.button.callback(`💻 Создать кабинет`, `e-reg/expert_profile`)]
  ]
}

export function approveLocation(timezone) {
  return [[
    Markup.button.callback("👈🏻 Назад", "e-reg/back_to_input_location"),
    Markup.button.callback("✅ Да", `e-reg/approve_location/${timezone}`)
  ]]
}

export function profileKbGen(expert) {
  const profileData = {
    birthday: expert.birthday ? expert.birthday : '. . .',
    city: expert.city ? expert.city : '. . .',
    email: expert.email ? expert.email : '. . .',
    techItems: expert.techItems ? expert.techItems : '. . .',
    internetSpeed: expert.internetSpeed ? expert.internetSpeed : '. . .',
    crypto: expert.crypto ? expert.crypto : '. . .'
  }
  return {
    profile: [
      [
        Markup.button.callback(`🎂 Дата рождения`, `empty_callback`),
        Markup.button.callback(`${profileData.birthday}`, `e-reg/edit_profile/birthday`)
      ],
      [
        Markup.button.callback(`🗺 Город`, `empty_callback`),
        Markup.button.callback(`${profileData.city}`, `e-reg/edit_profile/city`)
      ],
      [
        Markup.button.callback(` 📧 Work Email`, `empty_callback`),
        Markup.button.callback(`${profileData.email}`, `e-reg/edit_profile/email`)
      ],
    ],
    lvl: [
      [
        Markup.button.callback(` 🖥 Tech items`, `empty_callback`),
        Markup.button.callback(`${profileData.techItems}`, `e-reg/edit_profile/techItems`)
      ],
      [
        Markup.button.callback(`🌐 Internet speed`, `empty_callback`),
        Markup.button.callback(`${profileData.internetSpeed}`, `e-reg/edit_profile/internetSpeed`)
      ],
    ],
    netWorth: [
      [
        Markup.button.callback(`🪙 Cryptocurrency`, `empty_callback`),
        Markup.button.callback(`${profileData.crypto}`, `e-reg/edit_profile/crypto`)
      ]
    ]
  }
}