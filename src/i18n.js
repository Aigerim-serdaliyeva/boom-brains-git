import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Formatter from './formatter'

Vue.use(VueI18n)

const locale = 'ru' // default locale
const formatter = new Formatter({ locale })

export default new VueI18n({
  locale,
  formatter,
  messages: {
    'ru': {
      widget: {
        week: "Недельная активность",
        month: "Прогресс за месяц",
        gamedata: "Данные по играм",
        ratingfriends: "Рейтинг Cреди друзей",
        age: "Возрастрная статистика",
        records: "Рекорды",
        ratingworld: "Мировой Рейтинг"
      },
      game: {
        tableShulte: "Таблица шульте",
        rememberNumber: "Запомни число",
        findNumber: "Найди число",
        calculate: "Вычисли",
        equation: "Определи знак",
        shulteLetters: "shulteLetters",
        rememberWords: "rememberWords",
        memorySquare: "memorySquare",
        coloredFigures: "coloredFigures",
        coloredWords: "coloredWords"
      },
      week: {
        mon: "пн",
        tue: "вт",
        wed: "ср",
        thu: "чт",
        fri: "пт",
        sat: "сб",
        sun: "вс",
        last: "Прошлая неделя",
        this: "Эта неделя"
      },
      year: '{count} лет',
      exit: "Выход",
      record: "Рекорд"
    },

    'en': {

    },

    'kz': {

    }
  }
})