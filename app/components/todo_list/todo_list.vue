<template>
    <ListView class="zinzin" for="todo in todos">
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
