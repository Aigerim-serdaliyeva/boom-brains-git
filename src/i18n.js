import Vue from "vue";
import VueI18n from "vue-i18n";
import Formatter from "./formatter";

Vue.use(VueI18n);

const locale = "ru"; // default locale
const formatter = new Formatter({ locale });

export default new VueI18n({
    locale,
    formatter,
    messages: {
        ru: {
            form: {
                login: "Войти на сайт",
                forget: "Восстановление пароля",
                forgetPassword: "Забыли пароль?",
                registration: "Регистрация",
                logIn: "Войти",
                account: "У вас уже есть аккаунт?",
                authorization: "Авторизация через соц сети",
                confirm: "Подтвердить"
            },
            error: {
                textRequired: "Поле обязательно к заполнению",
                textMax64: "Максимальное количество символов не должно превышать 64",
                textRight: "Проверьте пожалуйста правильность:",
                textMax32: "Максимальное количество символов не должно превышать 32",
                textMax16: "Максимальное количество символов не должно превышать 16",
                textEmail: "Такой email уже используется",
                textNikname: "Такой никнейм уже используется",
                textPassword: "Пароли не совпадают"
            },
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
            years: "{count} лет",
            exit: "Выход",
            record: "Рекорд"
        },

        en: {
            form: {
                login: "Log in to the site",
                forget: "Password recovery",
                forgetPassword: "Forgot password?",
                registration: "Registration",
                logIn: "Login",
                account: "Already have an account?",
                authorization: "Authorization through social networks",
                confirm: "Confirm"
            },
            error: {
                textRequired: "This field is required",
                textMax64: "The maximum number of characters must not exceed 64",
                textRight: "Please check the correctness:",
                textMax32: "The maximum number of characters must not exceed 32",
                textMax16: "The maximum number of characters must not exceed 16",
                textEmail: "This email is already in use",
                textNikname: "This nickname is already in use",
                textPassword: "Passwords do not match"
            },
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
            years: "{count} years",
            exit: "Exit",
            record: "Record"
        },

        kz: {
            form: {
                login: "Сайтқа кіру",
                forget: "Паролді қалпына келтіру",
                forgetPassword: "Паролді ұмыттыңыз ба?",
                registration: "Тіркелу",
                logIn: "Кіру",
                account: "Аккаунтыңыз бар ма?",
                authorization: "Әлеуметтік желілер арқылы авторизациялау",
                confirm: "Растау"
            },
            error: {
                textRequired: "Кесте толтырылуға міндетті",
                textMax64: "Символдардың саны 64-тен аспауы керек",
                textRight: "Дұрыстығын тексеріңіз:",
                textMax32: "Символдардың саны 32-тен аспауы керек",
                textMax16: "Символдардың саны 16-тен аспауы керек",
                textEmail: "Бұл email бұрыннан қолданылуда",
                textNikname: "Бұл никнейм қолданыста",
                textPassword: "Парольдер сәйкес келмейді"
            },
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
            years: "{count} жас",
            exit: "Шығу",
            record: "Рекорд"
        }
    }
});
