<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import { useStore } from "../../store/store";

export default defineComponent({
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("fetchGifs");
    });
  },
});
</script>

<template>
  <main></main>
</template>
