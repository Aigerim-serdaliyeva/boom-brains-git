<template>
  <div id="app">
    <app-form></app-form>
  </div>
</template>

<script>
import Form from './components/Form'

export default {
  name: 'app',
  components: {
    appForm: Form
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Arial, sans-serif;
}
</style>
