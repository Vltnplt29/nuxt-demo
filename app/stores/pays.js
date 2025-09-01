import { defineStore } from 'pinia'

export const usePaysStore = defineStore('pays', {
    state: () => ({
        pays: ['France', 'Allemagne', 'Italie', 'Espagne'],
    }),
    getters: {
        nbPays: (state) => state.pays.length,
        allPays: (state) => state.pays,
        onePays: (id) => state.pays[id]
    },
})