<template>
    <div class="indicator">
        <div class="parent-spinner">
            <Spinner v-bind="spinnerSettings" />
        </div>
    </div>
</template>

<script>
import Spinner from "../loading/Spinner.vue";
export default {
    components: { Spinner },
    props: {
        spinnerSettings: {
            type: Object
        }
    }
};
</script>

<style lang="scss" scoped>
.indicator {
    height: 100%;
    width: 100%;
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    background: rgba(255, 255, 255, 0.8);
    align-items: center;
}

.parent-spinner {
    position: relative;
}
</style>
