<template>
  <div class="layout">
    <div class="container">
      <div class="row">    
        <div class="col-lg-3">
          <Sidebar />
        </div>    
       <div class="col-lg-12">
         <div class="layout__content">
            <Header />
            <main class="main">
              <router-view></router-view>
            </main>
          </div> 
       </div>               
      </div>      
    </div>    
  </div>
</template>

<script>
import Header from './Header'
import Sidebar from './Sidebar'
export default {
  components: {
    Header,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    width: 100%;
    height: 100vh;
    padding: 90px 0; 
    color: #888888;

    &__content {
      background: #fff;
      border-radius: 10px;
      overflow: hidden;
    }

    .main {
      padding: 20px;
    }
  }
</style>