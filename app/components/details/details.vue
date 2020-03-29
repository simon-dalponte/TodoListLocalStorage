<template>
    <Page>
        <StackLayout>
            <Label class="fab" :text="todo_items.description"></Label>
            <StackLayout orientation="horizontal">
                <Button text="Fait" @tap="onButtonTap"/>
                <Button text="Pas fait" @tap="onButtonTap2"/>
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
    import Home from "../Home";
    const appSettings = require('tns-core-modules/application-settings');

    export default {
        components: {
            Home
        },
        methods: {
            onButtonTap2() {
                //this.todo_items.status = 0;
                this.searchTodo(this.todo_items,'status',0);
                this.$navigateTo(Home)
            },
            onButtonTap() {
                //this.todo_items.status = 1;
                this.searchTodo(this.todo_items,'status',1);
                this.$navigateTo(Home)
            },
            searchTodo(todo,property,value){
                let todos = JSON.parse(appSettings.getString('todos'));
                for (let i=0; i < todos.length; i++){
                    if (todos[i].id === todo.id){
                        todos[i][property] = value
                    }
                }
                appSettings.setString('todos',JSON.stringify(todos))
            }

        },
        props: ["todo_items"]
    };
</script>
