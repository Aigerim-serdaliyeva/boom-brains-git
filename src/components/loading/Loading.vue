<template>
    <div class="loading">
        <Spinner v-bind="spinnerSettings" />
        <div>
            <slot />
        </div>
    </div>
</template>

<script>
import Spinner from "./Spinner.vue";

export default {
    props: {
        spinnerSettings: {
            type: Object
        }
    },
    components: { Spinner }
};
</script>

<style lang="scss" scoped>
.loading {
    position: relative;
    height: 100%;
    width: 100%;
    background: "#fff";
}
</style>
