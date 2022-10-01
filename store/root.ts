import { defineStore } from 'pinia';

// The root store is specifically used for the app state.
// For example, modal state, loading state, etc.

// Store boilerplate
export const useRootStore = defineStore('root', {
  state: () => ({
    userLang: 'en',
  }),
  
  actions: {

  },

  getters: {
    
  },
});