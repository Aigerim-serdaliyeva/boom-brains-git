<template>
  <div>
    <div class="d-flex">
      <div>
        <div class="d-flex">
          <Widget title="Недельная активность">
            <router-link to="/profile/week">    
              text
            </router-link>
          </Widget>
          <Widget title="Прогресс за месяц">
            <router-link to="/profile/month">    
              text     
            </router-link>
          </Widget>
          <Widget title="Данные по играм">
            <router-link to="/profile/game-data"> 
              text        
            </router-link>
          </Widget>
        </div>
        <div>
          <div class="d-flex">
            <Widget title="Radar">
              <router-link to="/profile/radar">  
                text         
              </router-link>
            </Widget>
            <div>
              <Widget title="Возрастная статистика">
                <router-link to="/profile/age">   
                  text      
                </router-link>
              </Widget>
              <Widget title="Рекорды">
                <router-link to="/profile/records">  
                  text       
                </router-link>
              </Widget>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Widget title="Рейтинг среди друзей" >
          <router-link to="/profile/rating-friends">  
            text       
          </router-link>
        </Widget>
        
        <Widget title="Мировой рейтинг" >
          <router-link to="/profile/rating-world">   
            text      
          </router-link>
        </Widget> 
      </div>     
    </div>
  </div>
</template>

<script>
import Widget from '../../components/widget/Widget'
export default {
  components: {
    Widget    
  }
}
</script>

<style lang="scss">
  
</style>