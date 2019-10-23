<template>
    <div v-if="!hasError">
        <slot />
    </div>
    <div v-else class="error">
        <div class="message">
            {{ errorMessage }}
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            hasError: "error/hasError",
            errorMessage: "error/message"
        })
    }
};
</script>

<style lang="scss" scoped>
.error {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.message {
    padding: 50px 100px;
    border-radius: 10px;
    background: #fff;
    white-space: pre-line;
}
</style>
