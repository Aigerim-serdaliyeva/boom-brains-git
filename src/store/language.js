const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
const CHANGE_KEY = "CHANGE_KEY";
const ACTIVE_LANGUAGE = "ACTIVE_LANGUAGE"

export const language = {
    namespaced: true,
    state: {
      currentLanguage: "ru",
      key: null
    },
    getters: {
      currentLanguage: ({ currentLanguage }) => currentLanguage,
      key: ({ key }) => key
    },
    mutations: {
        [CHANGE_LANGUAGE](state, lang) {
          state.currentLanguage = lang          
        },
        [CHANGE_KEY](state) {
          state.key = Date.now()
        } 
    },
    actions: {
      changeLanguage({commit}, lang) {
        commit(CHANGE_LANGUAGE, lang) 
      },
      changeKey({commit}) {
        commit(CHANGE_KEY)
      }
    }
};
