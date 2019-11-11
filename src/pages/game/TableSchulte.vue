<template>
  <div class="container">
    <div class="row align-items-stretch">
      <div class="col-lg-3 col-md-3">
        <img src="@/assets/img/game/game-1-1.png" alt="">
      </div>
      <div class="col-lg-9 col-md-9">
        <div class="row align-items-center game-widget__content">
          <div class="col-lg-4 col-md-3">
            <img src="@/assets/img/game/game-1-2.png" alt="">
          </div>
          <div class="col-lg-8 col-md-9">
            <GameWidget 
              :title="$t('game.tableShulte')"
            >   
              <template v-slot:rules>
                <p class="game-widget__block__text">Нажимайте на числа по их возрастанию, в зависимости от уровня количество ячеек будет увиличиваться. 
                Ошибкой будет нажатие цифры которая не стоит следующей в очереди. Правильные нажатия помечаются - зеленым цветом, а ложные - красным. 
                Будьте внимательны и старайтесь концентрировать взгляд на центре таблицы. </p>
              </template>        
            </GameWidget>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameWidget from './GameWidget.vue'
import axios from "axios"
export default {    
    components: { GameWidget },
    data() {
      return {
        game: "",
        myWorldRecord: {}
      }
    },
    // mounted() {
    //     this.fetchGameData()
    // },
    methods: {
      async fetchGameData() {
          try {
              const res = await axios.post("api/game-info", {game: this.game})
              const data = await res.data
              const {myWorldRecord} = data
              this.myWorldRecord = myWorldRecord
          }
          catch(error) {
              throw error
          }
      }
    }
};
</script>

<style lang=scss>

  .game-widget__content {
    height: 100%;
  }
    
</style>
