import { createStore } from 'vuex'

export default createStore({
  state: {
    image:''
  },
  getters: {
    getImage:(state)=> state.image
  },
  mutations: {
    SendImage(state,payload){
      state.image = payload
    }

  },
  actions: {
    sendImage(){

    }
  },
  modules: {
  }
})
