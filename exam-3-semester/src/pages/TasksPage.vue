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
@media print {
    @page {
        margin: 2cm;
    }
    * {
        background: transparent !important;
        color: #000 !important;
        box-shadow: none !important;
        text-shadow: none !important;
    }
    h1 {
        font-size: 28pt;
    }
    h2 {
        font-size: 20pt;
    }
    p {
        font-size: 14pt;
    }
    .header, .footer, .form {
        display: none;
    }
    .task-card__text-none {
        display: block;
        font-size: 14pt;
    }
    .container {
        display: flex;
        flex-direction: column-reverse;
    }
}
</style>