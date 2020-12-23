<template>
    <div>
        <div v-for="(todo, key) in allTodos" :key="key">
            <TodoItem :todo="todo"/>
        </div>
        
    </div>
</template>

<script>
import TodoItem from "./TodoItem.vue"
import { mapGetters } from "vuex"

export default {
    computed: {
        ...mapGetters(["allTodos"])
    },
    
    components: {
        TodoItem
    }
}
</script>