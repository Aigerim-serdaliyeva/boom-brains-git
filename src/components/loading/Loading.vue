<template>
    <div class="loading" >
        <Spinner v-bind="spinnerSettings" />
        <div :style='isLoadingStyle'>
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
        },       
    },
    components: { Spinner },
    computed: {
        isLoadingStyle() {
            const { loading } = this.spinnerSettings;

            if(loading) {
                return {
                    opacity: 0
                }
            }            
        }
    }
};
</script>

<style lang="scss" scoped>
.loading {
    position: relative;
    height: 100%;
    width: 100%;
    background: '#fff'
}
</style>
