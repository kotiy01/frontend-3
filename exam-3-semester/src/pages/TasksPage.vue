<template>
    <v-container class="tasks-container d-flex flex-column align-center justify-flex-start">
        <TaskForm @addTask="addTask" />
        <FormSelects />
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
import FormSelects from '@/components/FormSelects'

export default {
    components: { 
        TaskComponent, TaskForm, TaskDialog, FormSelects
    },
    data: () => ({
        tasks: []
    }),
    mounted() {
        this.$store.dispatch("fetchTasks")
    },
    methods: {
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

<style>

</style>