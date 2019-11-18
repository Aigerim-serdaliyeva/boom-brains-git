<template>
    <div class="input-div">
        <slot />
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: this.value
        };
    },
    methods: {
        handleInput(e) {
            this.$emit("input", this.content);
        }
    }
};
</script>

<style lang="scss" scoped>
.input-div {
    margin-bottom: 20px;
    width: 100%;
}

.input,
.textarea {
    outline: none;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    line-height: inherit;
    background: #fbfbfb;
    border: 1px solid #eeeeee;
    border-radius: 47px;
    padding: 15px 10px;
    max-width: 294px;
    width: 100%;
    position: relative;

    &::-webkit-input-placeholder {
        color: #b4b4b4;
        text-decoration: underline;
        font-weight: normal;
        opacity: 1;
    }

    &::-moz-placeholder {
        color: #b4b4b4;
        text-decoration: underline;
        font-weight: normal;
        opacity: 1;
    }

    &:-ms-input-placeholder {
        color: #b4b4b4;
        text-decoration: underline;
        font-weight: normal;
        opacity: 1;
    }
}

@media screen and (max-width: 1370px) {
    .input-div {
        margin-bottom: 15px;
    }

    .input,
    .textarea {
        padding: 10px 10px;
    }
}
</style>
