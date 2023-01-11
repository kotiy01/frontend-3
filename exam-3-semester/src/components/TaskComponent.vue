<template>
    <v-card class="task-card blue lighten-3 d-flex align-center justify-space-between flex-row" @click="openTask">
        <v-card-text class="task-card__text black--text">{{ task.title + " - " + task.date }}</v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    methods: {
        openTask() {
            this.$store.commit("setCurrentTask", this.task)
            this.$store.commit("showDialog")
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;1,600&display=swap');


.task-card {
    width: 600px;
    margin: 10px 0 10px 0;
}
.task-card__text {
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 500;
}
</style>