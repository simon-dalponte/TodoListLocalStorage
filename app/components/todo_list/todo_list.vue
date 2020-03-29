<template>
    <ListView class="zinzin" for="todo in todos" @itemTap="onItemTap">
        <v-template>
            <todo :todo="todo"></todo>
        </v-template>
    </ListView>
</template>

<script>
    import Todo from "../todo/todo"
    import Details from "../details/details"

    export default {
        props: ["todos"],
        components: {
            Todo,
            Details,
        },
        methods: {
            onItemTap(args) {
                console.log(args)
                this.$navigateTo(Details, {
                    props: {
                        todo_items: this.todos[args.index]
                    }
                });
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
    .zinzin{
        height: 100%;
    }
</style>
