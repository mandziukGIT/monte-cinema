<template>
  <div>{{ seance }}</div>
</template>

<script>
import api from "@/api/FactoryRepository";
const seance = api.get("seances");
export default {
  data() {
    return {
      seance: null,
    };
  },
  async mounted() {
    this.seance = await seance.getSeance(this.$route.params.seanceId);
  },
};
</script>

<style></style>
