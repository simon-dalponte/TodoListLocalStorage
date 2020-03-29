<template>
    <StackLayout v-bind:class="setClass(todo)" orientation="horizontal">
        <Label :text="todo.name" @tap="onItemTap"></Label>
        <Button style="float:left" text="Edit" @tap="onButtonTap"></Button>
        <Button style="float:left" v-if="todo.status === 1" text="Delete" @tap="onButtonTapDelete"></Button>
    </StackLayout>
</template>

<script>
    import EditTodo from "../EditTodo/EditTodo";
    import Details from "../details/details";
    const appSettings = require('tns-core-modules/application-settings');

    export default {
        props: ["todo"],

        data(){
            return {
                data: JSON.parse(appSettings.getString("todos"))
            }
        },

        components : {
          EditTodo,
        },
        methods: {
            onButtonTapDelete() {
                console.log(this.data)
                for (let i = 0; i < this.data.length; i++) {
                    if (this.data[i].id === this.todo.id) {
                        this.data.splice(i, 1);
                    }
                }
                appSettings.setString("todos", JSON.stringify(this.data))
            },

            setClass(todo){
              if (todo.status === 0){
                  return "not-done"
              } else {
                  return "done"
              }
            },

            onItemTap() {
                this.$navigateTo(Details, {
                    props: {
                        todo_items: this.todo
                    }
                });
            },

            onButtonTap() {
                console.log("zinzin");
                //console.log(this.$store.state.todos);
                this.$showModal(EditTodo, {
                    props: {todoEdit: this.todo}
                })
                    .then(EditTodo => {
                        this.searchTodo(EditTodo)
                    })
            },
            searchTodo(EditedTodo){
                let todos = JSON.parse(appSettings.getString('todos'));
                for (let i = 0; i < todos.length; i++) {
                 if (todos[i].id === EditedTodo.id) {
                     todos.splice(i, 1);
                     todos.push(EditedTodo)
                 }
             }
                console.log(todos);
                appSettings.setString('todos',JSON.stringify(todos))
            }
        },
    };
</script>
<style scoped="scss">
</style>
