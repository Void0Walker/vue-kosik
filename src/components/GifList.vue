<script lang="ts">
import type { Result } from "types/tenorTrends";
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: { gifList: Array<Result> },
  setup(props) {
    return {
      gifs: computed(() => props.gifList),
    };
  },
});
</script>

<template>
  <div class="gif-container">
    <div v-for="(gif, index) in gifs" :key="gif.id" class="gif-image-card">
      <img :src="gif.media[0].tinygif.url" />
      <div>
        <p>
          Position: {{ index + 1 }}, <strong>{{ gif.content_rating }}</strong
          >{{ gif.content_description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gif-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gif-image-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 1rem;
}

.gif-image-card > div {
  text-align: center;
  margin-left: 1rem;
}
</style>
