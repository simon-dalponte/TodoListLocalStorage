<template>
    <StackLayout>
        <Label text="Add new Todo"></Label>
        <TextField v-model="name" hint="Enter todo's name"></TextField>
        <TextField v-model="description" hint="Enter todo's description"></TextField>
        <Button text="save" @tap="onSaveTap"></Button>
    </StackLayout>
</template>

<script>
    import TodoList from "../todo_list/todo_list"
    export default {
        props: ["id"],
        components:{
            TodoList
        },
        data(){
            return {
                name: "",
                description: ""
            }
        },
        methods :{
            onSaveTap(){
                const newTodo = {
                    id: this.id,
                    name: this.name,
                    description: this.description,
                    status: 0
                };

                this.$modal.close(newTodo);
            }
        }
    };
</script>
