<template>
    <div>
        <div class="row">
            <div v-if="editing">
                <input type="text" v-model="title">
            </div>
            <div v-else>
                <h3 class="col">{{ title }}</h3>
            </div>
            <button class="btn btn-primary" @click="editTodoI()">
                {{ editOrUpdate }}
            </button>
            <button class="btn btn-danger"  @click="deleteTodo(todo.id)">削除</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            editing: false,
            title: this.todo.title,
        }
    },
    computed: {
        editOrUpdate: function() {
            return this.editing ? "更新" : "編集"
        }
    },
    props: {
        todo: {}
    },
    methods: {
        ...mapActions(["deleteTodo", "editTodo"]),
        editTodoI() {
            if (this.editing != true) {
                return this.editing = true
            }
            else {
                this.editTodo(this.todo.id, this.title)
                return this.editing = false
            }
        }
    }
}
</script>

<style scoped>
.row {
    width: 90%;
    padding-left: 30px;
}
</style>