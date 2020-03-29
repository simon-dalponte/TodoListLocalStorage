import Vue from "nativescript-vue";
import Home from "./components/Home";
import Vuex from "vuex";
import Data from "./datas/data_toodo.json";
import fs from "fs"
import EditTodo from "~/components/EditTodo/EditTodo";

//Vue.use(Vuex);
// const Store = new Vuex.Store({
//    state : {
//        todos : Data.todo_list
//    } ,
//     mutations: {
//         AddTodo: function (state,newTodo) {
//             //let fileContent = JSON.stringify(newTodo);
//             //fs.writeFile("./datas/data_toodo.json", fileContent,)
//             state.todos.push(newTodo)
//         },
//         EditTodo: function (state, EditTodo) {
//             console.log('zinzin');
//             for (let i = 0; i < state.todos.length; i++) {
//                 if (state.todos[i].id === EditTodo.id) {
//                     state.todos.splice(i, 1);
//                     state.todos.push(EditTodo)
//                 }
//             }
//         },
//     }
// });

new Vue({
    //store: Store,
    render: h => h('frame', [h(Home)]),
    components: {
        Home
    }
}).$start();
