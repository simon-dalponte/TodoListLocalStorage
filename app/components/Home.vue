<template>
    <Page>
        <ActionBar class="nt-action-bar" title="Todos">
            <ActionItem text="Add" @tap="onAddTap"></ActionItem>
            <ActionItem text="Refresh" @tap="forceRerender"></ActionItem>
        </ActionBar>
        <StackLayout>
            <TodoList :todos="todos"></TodoList>
        </StackLayout>
    </Page>
</template>

<script>
    import TodoList from "./todo_list/todo_list"
    import AddTodo from "./AddTodo/AddTodo";
    const appSettings = require('tns-core-modules/application-settings');

    export default {
        data() {
            return {
                todo_lists: null,
                componentKey: 0

            }
        },
        components: {
            TodoList,
            AddTodo
        },
        created: function (){
            this.todo_list = appSettings.getString("todos");
            if(!this.todo_list) this.todo_list = '[]';
            appSettings.setString("todos", this.todo_list);
        },
        computed: {
            todos: function () {
                console.log(appSettings.getString("todos"));
                return JSON.parse(appSettings.getString("todos"));
            }
        },
        methods: {
            onAddTap() {
                const newId = new Date().getTime();
                this.$showModal(AddTodo, {
                    props: {id: newId}
                })
                    .then(newItem => {
                        if (newItem) {
                            let todos = JSON.parse(appSettings.getString("todos"));
                            todos.push(newItem);
                            appSettings.setString("todos", JSON.stringify(todos))
                        }
                    })
            },
            forceRerender() {
                this.$forceUpdate()
            }
        }

    };
</script>

<style scoped="scss">
    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
