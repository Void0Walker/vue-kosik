<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { debounce } from "lodash";
import { useStore } from "../../store/store";

export default defineComponent({
  setup() {
    const store = useStore();
    const searchInput = ref("");

    const handleInputChange = debounce((event: Event) => {
      const searchTerm = (event.target as HTMLInputElement).value;

      store.dispatch("searchGifs", searchTerm);
    }, 200);

    return {
      searchInput,
      handleInputChange,
      gifs: computed(() => store.state.gifSearchResults?.results),
    };
  },
});
</script>

<template>
  <div class="about">
    <h1>Search page</h1>
    <p>Message is: {{ searchInput }}</p>
    <input
      v-model="searchInput"
      placeholder="edit me"
      @keydown="handleInputChange"
    />
    {{ gifs }}
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
