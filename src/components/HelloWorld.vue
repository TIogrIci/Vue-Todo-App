<template>
  <div id="app">
    <div class="container">
      <h1>Todo App</h1>
      <div v-if="isEditing == false">
        <input type="text" v-model="todo" />
        <button type="submit" value="add" @click="storeTodo">Add</button>
      </div>

      <div v-else>
        <input type="text" v-model="todo" />
        <button type="submit" value="update" @click="updateTodo">UPDATE</button>
      </div>

      <ol>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo }}

          <button @click="editTodo(todo, index)">edit</button>
          <button @click="deleteTodo(index)">delete</button>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: "",
      todos: ["Go to hell!!", "Make a honey"],
      selectedIndex: null,
      isEditing: false,
    };
  },
  methods: {
    storeTodo() {
      this.todos.push(this.todo);
      this.todo = "";
    },
    editTodo(todo, index) {
      this.todo = todo;
      this.selectedIndex = index;
      this.isEditing = true;
    },
    updateTodo() {
      this.todos.splice(this.selectedIndex, 1, this.todo);
      this.todo = "";
      this.isEditing = false;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>