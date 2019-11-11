<template>
    <div id="app">
        <ErrorBoundary>
            <router-view />
        </ErrorBoundary>
    </div>
</template>

<script>
import ErrorBoundary from "./components/error-boundary/ErrorBoundary.vue";

export default {
    name: "app",
    components: { ErrorBoundary }
};
</script>

<style>
#app {
    /* overflow-y: scroll; */
}
</style>
