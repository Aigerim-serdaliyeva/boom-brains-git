<template>
  <div class="container">
    <div class="row align-items-stretch">
      <div class="col-xl-3">
        <img src="@/assets/img/game/game-1-1.png" alt="">
      </div>
      <div class="col-xl-9">
        <div class="row align-items-center game-widget__content">
          <div class="col-xl-4">
            <img src="@/assets/img/game/game-1-2.png" alt="">
          </div>
          <div class="col-xl-8">
            <GameWidget 
              title="Таблица шульте"
            >   
              <template v-slot:rules>
                <p class="game-widget__block__text">Нажимайте на числа по их возрастанию, в зависимости от уровня количество ячеек будет увиличиваться. 
                Ошибкой будет нажатие цифры которая не стоит следующей в очереди. Правильные нажатия помечаются - зеленым цветом, а ложные - красным. 
                Будьте внимательны и старайтесь концентрировать взгляд на центре таблицы.</p>
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
export default {    
    components: { GameWidget }
};
</script>

<style lang=scss>

  .game-widget__content {
    height: 100%;
  }
    
</style>
