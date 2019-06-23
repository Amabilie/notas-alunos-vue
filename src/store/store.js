import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        materialService: require("../service/MateriaService")
    },
    getters: {
        materialService: state => state.materialService
    }
})