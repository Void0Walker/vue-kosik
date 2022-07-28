<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { debounce } from "lodash";

import GifList from "../components/GifList.vue";
import { useStore } from "../../store/store";

export default defineComponent({
  components: {
    GifList,
  },
  setup() {
    const store = useStore();
    const searchInput = ref("");

    const handleSearchInput = debounce((event: Event) => {
      const searchTerm = (event.target as HTMLInputElement).value;

      store.dispatch("searchGifs", searchTerm);
    }, 200);

    return {
      searchInput,
      handleSearchInput,
      gifs: computed(() =>
        searchInput.value !== "" ? store.getters.getGifSearch : undefined
      ),
    };
  },
});
</script>

<template>
  <div class="search-container">
    <h1>Search page</h1>
    <p>Search term is: {{ searchInput }}</p>
    <input
      class="search-box"
      v-model="searchInput"
      placeholder="search"
      @keydown="handleSearchInput"
    />
    <GifList :gif-list="gifs" />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .search-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  }

  .search-container > h1,
  p {
    align-self: flex-start;
  }

  .search-box {
    border-radius: 4px;
    padding: 1rem;
    font-size: 1rem;
    min-width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
