<template>
    <div class="input-div">
        <input
            class="input"
            :type="type"
            :placeholder="placeholder"
            :name="name"
            v-model="content"
            @input="handleInput"
            :required="requiredProp"
            :autocomplete="autocomplete"
        />
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        placeholder: String,
        name: String,
        type: {
            default: "text",
            type: String
        },
        value: null,
        requiredProp: {
            type: Boolean,
            default: false
        },
        autocomplete: {
            type: String,
            default: 'off'
        }
    },
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

</style>
