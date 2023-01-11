<template>
    <v-dialog v-model="$store.getters.getDialogVisible" max-width="600" @click:outside="store.commit('hideDialog')">
        <v-card>
            <v-card-title>{{ $store.getters.getCurrentTask.title }}</v-card-title>
            <v-card-text>{{ $store.getters.getCurrentTask.date }}</v-card-text>
            <v-card-text>{{ $store.getters.getCurrentTask.desc }}</v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {

}
</script>