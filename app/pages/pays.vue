<template>
    <section class="max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8">
        <h1 class="text-2xl font-bold text-blue-700 mb-4">Liste des pays</h1>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
            <li v-for="(pays, key) in storePays.pays" :key="key">{{ pays }}</li>
        </ul>
        <div class="mb-4 text-gray-600">Nombre total de pays : <span class="font-semibold">{{ storePays.nbPays }}</span></div>
        <form @submit.prevent="addPays" class="flex gap-2 mb-2">
            <input v-model="newPays" type="text" placeholder="Ajouter un pays" class="border rounded px-2 py-1 flex-1" />
            <button type="submit" class="my-button">Ajouter</button>
        </form>
        <div v-if="message" class="text-green-600 text-sm mt-2">{{ message }}</div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { usePaysStore } from '~/stores/pays'

const storePays = usePaysStore()
const newPays = ref('')
const message = ref('')

function addPays() {
    if (newPays.value && !storePays.pays.includes(newPays.value)) {
        storePays.pays.push(newPays.value)
        message.value = `Pays ajouté : ${newPays.value}`
        newPays.value = ''
    } else {
        message.value = 'Ce pays existe déjà ou le champ est vide.'
    }
    setTimeout(() => (message.value = ''), 2000)
}
</script>