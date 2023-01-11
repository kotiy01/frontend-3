<template>
    <v-container class="form d-flex align-center justify-center flex-column">
        <v-select :items="sort" label="Сортировать по" class="select-form"></v-select>
        <v-select :items="filter" label="Фильтровать по" class="select-form"></v-select>
        <v-text-field label="Найти" class="select-form"></v-text-field>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        sort: ['Дате добавления'],
        filter: ['Дате назначения']
    })
}
</script>

<style>
.select-form {
    width: 600px;
}
</style>