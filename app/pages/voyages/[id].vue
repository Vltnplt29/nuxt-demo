<template>
    <div class="voyages">
        <h1>Titre</h1>
        <pre>{{ item }}</pre>
        <p>Prix : {{ item['voyages-prix'] }}</p>
    </div>
</template>

<script setup>

const route = useRoute()
const id = route.params.id
const { data } = await useFetch(`https://ingrwf12.cepegra-frontend.xyz/cockpit2/api/content/item/voyages/${id}`)

const item = data.value
</script>