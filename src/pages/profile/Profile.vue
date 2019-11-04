<template>
    <Loading :spinnerSettings="spinnerSettings">
        <transition name="page" mode="out-in">
            <router-view />
        </transition>        
    </Loading>
</template>

<script>
import Loading from '../../components/loading/Loading.vue'

export default {
    components: { Loading },
    data() {
        return {            
            spinnerSettings: {
                spinnerColor: '#bada55',
                loading: false,
                size: 20                
            }
        };
    }
};
</script>

<style lang="scss">
    
</style>    
