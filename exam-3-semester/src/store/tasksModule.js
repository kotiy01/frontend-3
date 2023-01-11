import axios from "axios"

export default {
    state: {
        tasks: [],
        dialogVisible: false,
        currentTask: {}
    },
    mutations: {
        setTasks(state, payload) {
            state.tasks = payload
        },
        showDialog(state) {
            state.dialogVisible = true
        },
        hideDialog(state) {
            state.dialogVisible = false
        },
        setCurrentTask(state, payload) {
            state.currentTask = payload
        }
    },
    getters: {
        getAllTasks(state) {
            return state.tasks
        },
        getDialogVisible: (state) => state.dialogVisible,
        getCurrentTask: (state) => state.currentTask
    },
    actions: {
        fetchTasks(context) {
            axios.get(`https://my-json-server.typicode.com/kotiy01/json-files/tasks`)
                .then(response => context.commit("setTasks", response.data))
        }
    }
}