<template>
    <div>
        <h3>Todo Input</h3>
        <div>
            <input type="text" class="form-control" v-model="todoText"/>
            <button type="submit" class="btn btn-primary" @click="addTodoI()">Add</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex"
import { v1 } from "uuid"

export default {
    data() {
        return {
            todoText: "",
        }
    },
    methods: {
        ...mapActions(["addTodo"]),
        addTodoI() {
            this.addTodo({
                id: v1(),
                title: this.todoText
            })
            return this.todoText = ""
        }
    }
}
</script>