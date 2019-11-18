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
    padding: 14px 67px;
    margin: 0 auto;
    display: block;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    border: none;
    cursor: pointer;

    &:hover {
        background: linear-gradient(
            117.63deg,
            #5acc02 -38.55%,
            #9ee666 52.34%,
            #5acc02 135.96%
        );
    }
    &:active {
        background: #489110;
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
}

    @media screen and (max-width: 1370px) {
        .button {
            padding: 12px 60px;
        }
    }
</style>
