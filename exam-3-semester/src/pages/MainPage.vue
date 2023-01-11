<template>
    <v-container class="tasks-container d-flex flex-column align-center justify-center">
        <TaskForm @addTask="addTask"/>
        <TaskComponent
            v-for="task in $store.getters.getAllTasks"
            :task="task" :key="task.id"
        />
        <TaskDialog />
    </v-container>
</template>

<script>
import TaskComponent from '@/components/TaskComponent'
import TaskForm from '@/components/TaskForm'
import TaskDialog from '@/components/TaskDialog'

export default {
    components: { 
        TaskComponent, TaskForm, TaskDialog
    },
    data: () => ({
        tasks: [],
        // currentTask: {},
        // dialogVisible: false
    }),
    mounted() {
        this.$store.dispatch("fetchTasks")
        // this.fetchTodo()
    },
    methods: {
        // fetchTodo() {
        //     this.axios.get(`https://my-json-server.typicode.com/kotiy01/json-files/tasks`)
        //         .then(response => this.tasks = response.data)
        // },
        addTask(task) {
            this.tasks.push(task)
        },
        openTask(task) {
            this.currentTask = task
            this.dialogVisible = true
        }
    }
}
</script>