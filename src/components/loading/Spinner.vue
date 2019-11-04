<template>
    <GridLoader
        class="spinner"
        :color="spinnerColor"
        :loading="loading"
        :size="size"
    />
</template>

<script>
import { GridLoader } from "@saeris/vue-spinners";

export default {
    props: {
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
    }
};
</script>
