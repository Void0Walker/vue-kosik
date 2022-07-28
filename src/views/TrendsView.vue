<script lang="ts">
import { defineComponent } from "vue";
import { computed } from "vue";
import { useStore } from "../../store/store";
import GifList from "../components/GifList.vue";

export default defineComponent({
  components: {
    GifList,
  },
  setup() {
    const store = useStore();

    return {
      trendingGifs: computed(() => store.state.trendingGifs).value?.results,
    };
  },
});
</script>

<template>
  <div>
    <h1>Trends</h1>
    <GifList :gif-list="trendingGifs" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .gif-image {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
