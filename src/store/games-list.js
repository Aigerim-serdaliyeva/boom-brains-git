import axios from "axios";

const FETCH_INFO = "FETCH_INFO";
const CHANGE_INDEX = "CHANGE_INDEX";

export const gamesList = {
    namespaced: true,
    state: {
      game: null,
      record: null,
      worldRecords: {},
      index: null
    },
    getters: {
      game: ({ game }) => game,
      worldRecords: ({ worldRecords }) => worldRecords,
      record: ({ record }) => record,
      index: ({ index }) => index,
    },
    mutations: {
      [FETCH_INFO] (state, payload) {
        const {game, worldRecords, record} = payload;
        state.game = game;       
        state.record = record;
        state.worldRecords = worldRecords;
      },
      [CHANGE_INDEX] (state, index) {
        state.index = index
      }
    },
    actions: {
      async fetchInfo({ commit }, gameName) {
          try {
            const res = await axios.post("api/game-info", {
              game: gameName
            });
            const data = await res.data;              
            commit(FETCH_INFO, data);              
          } catch (err) {
              throw err;
          }
      },

      changeIndex({ commit }, index) {
          commit(CHANGE_INDEX, index);
      }
    }
};
