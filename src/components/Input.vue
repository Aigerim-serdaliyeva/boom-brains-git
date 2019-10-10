<template>
  <div class="input-div">
    <input class="input" :type="type" :placeholder="placeholder" :name="name">
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    name: String,
    type: {
      default: "text",
      type: String,
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

  .input-div {    
    margin-bottom: 20px;
    width: 100%;
  }

  .input, .textarea {
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    line-height: inherit;
    background: #FBFBFB;
    border: 1px solid #EEEEEE;
    border-radius: 47px;
    padding: 15px 10px;   
    max-width: 294px;
    width: 100%;
    position: relative;

    &::-webkit-input-placeholder {
      color: #B4B4B4;
      text-decoration: underline;
      font-weight: normal;
      opacity: 1;
    }
    
    &::-moz-placeholder {
      color: #B4B4B4;
      text-decoration: underline;
      font-weight: normal;
      opacity: 1;
    }
    
    &:-ms-input-placeholder {
      color: #B4B4B4;
      text-decoration: underline;
      font-weight: normal;
      opacity: 1;
    }
  }
</style>