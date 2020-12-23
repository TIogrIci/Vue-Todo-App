<template>
    <div>
        <div class="row">
            <h3 class="col">{{ todo.title }}</h3>
            <button class="btn btn-primary" >編集</button>
            <button class="btn btn-danger"  @click="deleteTodo(todo.id)">削除</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
        todo: {}
    },
    methods: {
        ...mapActions(["deleteTodo"]),
    }
}
</script>

<style scoped>
.row {
    width: 90%;
    padding-left: 30px;
}
</style>
