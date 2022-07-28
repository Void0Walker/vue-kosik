<script lang="ts">
import type { Result } from "types/tenorTrends";
import { defineComponent } from "vue";

export default defineComponent({
  props: { trendingGifs: Array<Result> },
  setup(props) {
    return {
      trendingGifsList: props.trendingGifs,
    };
  },
});
</script>

<template>
  <div class="gif-container">
    <h1 v-if="trendingGifsList">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <div v-for="(trendingGif, index) in trendingGifsList" :key="trendingGif.id">
      <img :src="trendingGif.media[0].tinygif.url" />
      <div class="details">
        <p>
          Position: {{ index + 1 }},
          <strong>{{ trendingGif.content_rating }}</strong
          >{{ trendingGif.content_description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
