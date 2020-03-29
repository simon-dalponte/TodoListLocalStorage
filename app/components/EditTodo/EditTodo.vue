<template>
    <StackLayout>
        <Label text="Edit Todo"></Label>
        <TextField v-model="name"></TextField>
        <TextField  v-model="description"></TextField>
        <Button text="save" @tap="onSaveTap"></Button>
    </StackLayout>
</template>

<script>
    export default {
        props : ["todoEdit"],
        data(){
            return {
                name: this.todoEdit.name,
                description: this.todoEdit.description
            }
        },
        methods :{
            onSaveTap(){
                const EditTodo = {
                    id : this.todoEdit.id,
                    name: this.name,
                    description: this.description,
                    status: this.todoEdit.status
                };
                this.$modal.close(EditTodo);
            }
        }
    };
</script>
