<template>
  <div>
    <seats-grid v-if="!!seance" :seance="seance" />
  </div>
</template>

<script>
import SeatsGrid from "@/components/SeatsGrid.vue";
import api from "@/api/FactoryRepository";
const seanceApi = api.get("seances");
export default {
  components: { SeatsGrid },
  data() {
    return {
      seance: null,
    };
  },
  async mounted() {
    const { data } = await seanceApi.getSeance(this.$route.params.seanceId);
    this.seance = data;
  },
};
</script>

<style></style>
