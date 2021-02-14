import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

Vue.use(Vuex); //use : 뷰를 사용하는 모든 영역에 사용할때 사용

// Todo.vue 컴포넌트에서 this.$store로 접근 가능하다.
export const store = new Vuex.Store({
    modules: {
        todoApp: todoApp
    }
});