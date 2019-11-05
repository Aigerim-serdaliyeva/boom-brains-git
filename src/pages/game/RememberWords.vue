<template>
  <div class="container">
    <div class="row align-items-stretch">
      <div class="col-xl-3">
        <img src="@/assets/img/game/game-4-1.png" alt="">
      </div>
      <div class="col-xl-9">
        <div class="row align-items-center game-widget__content">
          <div class="col-xl-4">
            <img src="@/assets/img/game/game-4-2.png" alt="">            
          </div>
          <div class="col-xl-8">
            <GameWidget title="RememberWords" >    
              <template v-slot:rules>
                <p class="game-widget__block__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos nulla laborum eius saepe eos velit hic eveniet mollitia accusantium!</p>
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

    
</style>
