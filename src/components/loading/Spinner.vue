<template>
    <GridLoader
        class="spinner"
        :style="loaderStyle"
        :color="spinnerColor"
        :loading="loading"
        :size="size"
    />
</template>

<script>
import { GridLoader, } from "@saeris/vue-spinners";

export default {
    props: {
        position: {
            type: String,
            default: "absolute"
        },
        left: {
            type: [String, Number],
            default: "-10%"
        },
        spinnerColor: {
            type: String
        },
        loading: {
            type: Boolean,
            required: true
        },
        size: {
            type: Number,
            require: true
        }
    },
    components: {
        GridLoader
    },
    computed: {
        loaderStyle() {
            let styles = {
                position: this.position
            };

            if (this.position === "absolute") {
                const { left } = this;

                styles = { ...styles, top: '50%', left, right: 0, transform: 'translateY(-50%)' };
            }

            return styles;
        }
    }
};
</script>

<style lang="scss" scoped>
.spinner {
    margin: auto;
}
</style>
