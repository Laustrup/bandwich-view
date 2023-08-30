import {createStore} from 'vuex';
import {User} from "@/models/users/User";

export default createStore({
  state: {
    user: User
  },
  getters: {
    port(): string {
      return "8080";
    },
    domain(state, getters): string {
      return "http://localhost:" + getters.port() + "/";
    }
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  }
})
