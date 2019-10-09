<template>
  <div class="layout">
    <Header />
    <Sidebar />
    <main class="main">
      <router-view></router-view>
    </main>
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

</style>