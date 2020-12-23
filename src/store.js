import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [
            {
                id: 1,
                title: "One"
            },
        ],
    },
    getters: {
        allTodos: (state) => state.todos
    },
    actions: {
        addTodo({ commit }, todo) {
            commit("add_todo", todo)
        },
        deleteTodo({ commit }, id) {
            commit("delete_todo", id)
        }
    },
    mutations: {
        add_todo(state, todo) {
            state.todos.push(todo)
            console.log(state.todos)
        },
        delete_todo(state, id) {
            state.todos = state.todos.filter(todo => todo.id != id)
        }
    }
})
