<template>
    <h1>This is MovieDetailPage {{ this.$route.params }}</h1>
</template>
<script>
export default {
    data() {
        return {
            movie: {
                title: "Ambulance"
            }
        }
    },
    metaInfo() {
        return {
            title: this.movie.title,
        }
    }
}
</script>