<template>
    <div class="grid">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {}
};
</script>

<style lang="scss">
.grid {
    position: relative;
    width: 100%;
    height: 740px;
}

@media screen and (max-width: 1370px) {
    .grid {
        height: 660px;
    }
}

@media screen and (max-width: 1200px) {
    
}
</style>
