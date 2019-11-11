<template>
  <div class="game-widget">
    <h4 class="game-widget__title">{{title}}</h4>
    <div class="game-widget__header">
      <div class="game-widget__record">
        <div class="game-widget__record__number"><img src="@/assets/img/game/record.png" alt=""><span>{{youRecord}}</span></div>
        <div class="game-widget__record__title">{{ $t('record.youRecord') }}</div>
      </div>
      <div class="game-widget__record">
        <div class="game-widget__record__number"><img src="@/assets/img/game/record.png" alt=""></div>
        <div class="game-widget__record__title">{{ $t('record.averageIndicator') }}</div>          
      </div>
      <div class="game-widget__record">
        <div class="game-widget__record__number"><img src="@/assets/img/game/record.png" alt=""></div>
        <div class="game-widget__record__title">{{ $t('record.worldRecord') }}</div>
      </div>
    </div>
    <div class="game-widget__block">
      <h5 class="game-widget__block__title">{{ $t('game.gameRules') }}</h5>
      <slot name="rules"></slot>
    </div>
    <div class="game-widget__block">
      <h5 class="game-widget__block__title">{{ $t('game.gameStimulates') }}</h5>
      <div class="game-widget__block__text">{{ $t('game.gameStimulatesText') }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    youRecord: {
      type: Number
    },
    averageIndicator: {
      type: String,
      // default: "Средний показатель"
    },
    worldRecord: {
      type: String,
      // default: "Мировой рекорд"
    },
    gameRules: {
      type: String,
      // default: "Правила игры:"
    },
    gameStimulates: {
      type: String,
      // default: "Тренажер стимулирует:"
    },
    gameStimulatesText: {
      type: String,
      // default: "Память, Внимание"
    }
  },
  i18n: {
    messages: {
      ru: {
        record: {
          youRecord: "Ваш Рекорд",
          averageIndicator: "Средний показатель",
          worldRecord: "Мировой рекорд"
        },
        game: {
          gameRules: "Правила игры:",
          gameStimulates: "Тренажер стимулирует:",
          gameStimulatesText: "Память, Внимание"
        }
      },
      en: {
        record: {
          youRecord: "Your record",
          averageIndicator: "Average indicator",
          worldRecord: "World record"
        },
        game: {
          gameRules: "Rules of the game",
          gameStimulates: "Training apparatus stimulates:",
          gameStimulatesText: "Memory, Attention"
        }
      },
      kz: {
        record: {
          youRecord: "Сіздің рекорд",
          averageIndicator: "Орташа көрсеткіш",
          worldRecord: "Әлемдік рекорд"
        },
        game: {
          gameRules: "Ойын ережелері: ",
          gameStimulates: "Тренажер ынталандырады:",
          gameStimulatesText: "Жад, Назар аудару: "
        }
      }
    }
  }
}
</script>

<style lang="scss">

  .game-widget {
    max-width: 410px;
    width: 100%;
    font-size: 14px;
    margin-left: 20px;
    height: 100%;
    &__title {
      font-weight: 500;
      font-size: 23px;
      text-align: center;
      margin-bottom: 15px;
    }

    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    &__record {
      &__number {
        text-align: center;
      }
    }

    &__content {
      background: #F1F1F1;
      border-radius: 8px;
      padding: 20px 30px;
    }

    &__block {
      margin-bottom: 5px;
      &:last-child {
        margin-bottom: 0;
      }
      &__title {
        margin: 0;
        font-weight: 500;
        font-size: 14px;
      }
      &__text {
        text-align: justify;
        margin-bottom: 0;
      }
    }
  }

  @media screen and (max-width: 1370px) {
    .game-widget {
      margin-left: 0;
      &__content {
        padding: 10px;
      }
    }
  } 
</style>