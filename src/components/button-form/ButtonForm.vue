<template>
    <button :type="buttonType" class="button">{{ text }}</button>
</template>

<script>
export default {
    props: {
        text: String,
        buttonType: {
            type: String,
            default: "button"
        }
    },
    methods: {
        submitForm() {
            this.$emit("submitForm");
        }
    }
};
</script>

<style lang="scss">
.button {
    background: #5acc02;
    color: #fff;
    font-size: 18px;
    border-radius: 57px;
    position: relative;
    display: inline-block;
    text-decoration: none;
    padding: 14px 15px;
    max-width: 186px;
    width: 100%;
    margin: 0 auto;
    display: block;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    border: none;
    cursor: pointer;
}
</style>
