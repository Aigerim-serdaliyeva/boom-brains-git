<template>
  <div class="game-widget">
    <h4 class="game-widget__title">{{title}}</h4>
    <div class="game-widget__header">
      <div class="game-widget__record">
        <div class="game-widget__record__number"><img src="@/assets/img/game/record.png" alt=""></div>
        <div class="game-widget__record__title">{{youRecord}}</div>
      </div>
      <div class="game-widget__record">
        <div class="game-widget__record__number"><img src="@/assets/img/game/record.png" alt=""></div>
        <div class="game-widget__record__title">{{averageIndicator}}</div>          
      </div>
      <div class="game-widget__record">
        <div class="game-widget__record__number"><img src="@/assets/img/game/record.png" alt=""></div>
        <div class="game-widget__record__title">{{worldRecord}}</div>
      </div>
    </div>
    <div class="game-widget__rules">
      <h5 class="game-widget__rules__title">{{ gameRules }}</h5>
      <div class="game-widget__rules__text">{{gameRulesText}}</div>
    </div>
    <div class="game-widget__stimulates">
      <h5 class="game-widget__stimulates__title">{{gameStimulates}}</h5>
      <div class="game-widget__stimulates__text">{{gameStimulatesText}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    youRecord: {
      type: String,
      default: "Ваш Рекорд"
    },
    averageIndicator: {
      type: String,
      default: "Средний показатель"
    },
    worldRecord: {
      type: String,
      default: "Мировой рекорд"
    },
    gameRules: {
      type: String,
      default: "Правила игры:"
    },
    gameRulesText: {
      type: String
    },
    gameStimulates: {
      type: String,
      default: "Тренажер стимулирует:"
    },
    gameStimulatesText: {
      type: String,
      default: "Память, Внимание"
    }
  }
}
</script>

<style lang="scss">

  .game-widget {
    max-width: 400px;
    width: 100%;
    font-size: 14px;
    margin-left: 20px;
    &__title {
      font-weight: 500;
      font-size: 23px;
      text-align: center;
      margin-bottom: 20px;
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
      padding: 25px 30px;
    }

    &__rules {
      margin-bottom: 10px;
      &__title {
        margin-bottom: 5px;
        font-weight: 500;
        font-size: 14px;
      }
      &__text {
        text-align: justify;
      }
    }

    &__stimulates {
      &__title {
        margin-bottom: 5px;
        font-weight: 500;
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 1370px) {
    
  } 
</style>