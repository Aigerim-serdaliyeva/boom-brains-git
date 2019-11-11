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
      years: '{count} лет',
      exit: "Выход",
      record: "Рекорд"
    },

    'en': {
      widget: {
        week: "Weekly activities",
        month: "Monthly progress",
        gamedata: "Game data",
        ratingfriends: "Rating among friends",
        age: "Age statistics",
        records: "Highscores",
        ratingworld: "World ranking"
      },
      game: {
        tableShulte: "",
        rememberNumber: "",
        findNumber: "",
        calculate: "",
        equation: "",
        shulteLetters: "shulteLetters",
        rememberWords: "rememberWords",
        memorySquare: "memorySquare",
        coloredFigures: "coloredFigures",
        coloredWords: "coloredWords"
      },
      week: {
        mon: "mon",
        tue: "tue",
        wed: "wed",
        thu: "thu",
        fri: "fri",
        sat: "sat",
        sun: "sun",
        last: "Last week",
        this: "This week"
      },
      years: '{count} years',
      exit: "Exit",
      record: "Record"
    },

    'kz': {
      widget: {
        week: "Апталық белсенділік",
        month: "Ай сайынғы прогресс",
        gamedata: "Ойын туралы мәліметтер",
        ratingfriends: "Достар арасындағы рейтинг",
        age: "Жас статистикасы",
        records: "Жоғары рейтингтер",
        ratingworld: "Әлемдік рейтинг"
      },
      game: {
        tableShulte: "",
        rememberNumber: "",
        findNumber: "",
        calculate: "",
        equation: "",
        shulteLetters: "shulteLetters",
        rememberWords: "rememberWords",
        memorySquare: "memorySquare",
        coloredFigures: "coloredFigures",
        coloredWords: "coloredWords"
      },
      week: {
        mon: "дс",
        tue: "сс",
        wed: "ср",
        thu: "бс",
        fri: "жм",
        sat: "сб",
        sun: "жб",
        last: "Өткен апта",
        this: "Осы апта"
      },
      years: '{count} жас',
      exit: "Шығу",
      record: "Рекорд"
    }
  }
})