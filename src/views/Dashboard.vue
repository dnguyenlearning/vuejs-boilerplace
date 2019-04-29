<template>
  <v-container fluid>
    <v-layout column>
      <v-flex class="mb-5">
        <v-layout row justify-space-between align-center>
          <h3 class="display-2">Todos App</h3>
          <div>
            <v-btn @click="addTodo" color="primary" :loading="adding">Add Todo</v-btn>
            <v-btn @click="testNotification" color="error">Test Notification</v-btn>
          </div>
        </v-layout>
      </v-flex>
      <v-flex v-if="loading">Loading...</v-flex>
      <v-flex v-if="!loading">
        <template v-for="(todo, index) in doneTodos">
          <v-divider v-show="index !== 0" :key="todo.id" :inset="true"></v-divider>
          <v-list-tile :key="todo.title" avatar @click="itemClick" class="ma-2">
            <v-list-tile-avatar>
              <img
                :src="`https://randomuser.me/api/portraits/men/${Math.floor(Math.random()*50)}.jpg`"
              >
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="todo.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="lorem.slice(0, Math.floor(Math.random()*300))"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "dashboard",
      lorem:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim repellat eius commodi ab, veniam earum? Ipsam enim maiores pariatur eos quo, iusto labore quam. Dolor neque sed dolorem et deserunt fuga porro cum, recusandae autem aut quas placeat illum debitis aperiam labore magni officia dolorum repudiandae, voluptatibus beatae. Nihil, impedit!"
    };
  },
  computed: {
    ...mapGetters('todos',["doneTodos", "adding", "loading"])
  },
  created() {
    this.$store.dispatch("todos/getTodosAsync");
  },
  methods: {
    itemClick() {},
    addTodo() {
      this.$store.dispatch("todos/addTodoAsync", {
        todo: {
          title: "Testing add Todo",
          userId: 1000,
          completed: true
        }
      });
    },
    testNotification(){
      this.$store.dispatch("message/messageError", {
        message: "Something went wrong!"
      })
    }
  }
};
</script>