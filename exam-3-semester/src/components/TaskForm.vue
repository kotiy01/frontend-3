<template>
    <form class="form d-flex align-center justify-center flex-column">
        <h2 class="form__title">Добавить задание</h2>
        <v-text-field v-model="title" label="Название задания" required class="form__input" inputmode="text"/>
        <v-text-field v-model="date" label="Дата" required class="form__input" inputmode="numeric"/>
        <v-text-field v-model="desc" label="Описание задания" required class="form__input" inputmode="text"/>
        <v-btn @click="addTask" class="blue lighten-3">Добавить</v-btn>
    </form>
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
.form {
    margin-top: 40px;
    margin-bottom: 40px;
}
.form__title {
    font-size: 28px;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    text-decoration: none;
    color: black;
    width: 400px;
    margin-bottom: 12px;
}
.form__input {
    width: 400px;
}

@media print {
    .form {
        display: none;
    }
}
</style>