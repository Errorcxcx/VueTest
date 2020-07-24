import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 100,
    students: [
      {id: 1, name: 'jack', age: 18},
      {id: 2, name: 'bob', age: 15},
      {id: 3, name: 'tom', age: 13},
      {id: 4, name: 'jerry', age: 11},
      {id: 5, name: 'james', age: 16},

    ]
  },
  mutations: {
    jia(state) {
      state.count++
    },
    jian(state) {
      state.count--
    }
  },
  getters: {
    pingfang(state) {
      return state.count * state.count
    },
    old15stu(state) {
      return state.students.filter(s => {
        return s.age >= 15
      })
    },
    old15stuLength(state, getters) {
      return getters.old15stu.length
    },
    oldAgeStu(state) {
      return function (age) {
        return state.students.filter(s => {
          return s.age > age
        })
      }
    }
  }


})

export default store
