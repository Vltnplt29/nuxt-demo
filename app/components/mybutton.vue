<template>
    <button @click="test" class="my-button shadow-lg">Clique ici</button>
</template>

<script setup>
const test = () => {
    alert('Button clicked')
}
</script>