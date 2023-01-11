<template>
    <v-form class="form d-flex align-center justify-center flex-column">
        <v-text-field v-model="title" label="Название задания" required class="form__input" />
        <v-text-field v-model="date" label="Дата" required class="form__input" />
        <v-text-field v-model="desc" label="Описание задания" required class="form__input" />
        <v-btn @click="addTask" class="blue lighten-3">Добавить</v-btn>
    </v-form>
</template>

<script>
export default {
    data: () => ({
        title: '',
        date: '',
        desc: ''
    }),
    methods: {
        addTask() {
            let task = {
                id: Date.now(),
                title: this.title,
                date: this.date,
                desc: this.desc
            }
            this.$emit('addTask', task)
        }
    }
}
</script>

<style>
.form__input {
    width: 400px;
}
</style>