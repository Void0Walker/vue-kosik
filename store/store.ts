import type { InjectionKey } from "vue";
import type { TrendingGifs } from "../types/tenorTrends";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  trendingGifs: Pick<TrendingGifs, "results"> | undefined;
  gifSearch: string | undefined;
  gifSearchResults: Pick<TrendingGifs, "results"> | undefined;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    trendingGifs: undefined,
    gifSearch: "",
    gifSearchResults: undefined,
  },
  getters: {
    getTrendingGifs: ({ trendingGifs }) => trendingGifs,
    getGifSearch: ({ gifSearchResults }) => gifSearchResults,
  },
  actions: {
    async fetchGifs({ commit }) {
      try {
        const data = await fetch(import.meta.env.VITE_TENOR_API_TRENDING_URL);

        const trendingGifs = (await data.json()) as TrendingGifs;

        commit("SET_TRENDING_GIFS", trendingGifs);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async searchGifs({ commit }, search: string) {
      try {
        const data = await fetch(
          `${import.meta.env.VITE_TENOR_API_SEARCH_URL}${search}`
        );

        const searchGifs = (await data.json()) as TrendingGifs;

        console.log({ searchGifs });

        commit("SET_GIF_SEARCH_RESULTS", searchGifs);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_TRENDING_GIFS(state, data: TrendingGifs) {
      state.trendingGifs = data;
    },
    SET_GIF_SEARCH_RESULTS(state, data: TrendingGifs) {
      state.gifSearchResults = data;
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
