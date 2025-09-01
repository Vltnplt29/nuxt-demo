<template>
    <section class="max-w-3xl mx-auto mt-10">
        <h1 class="page-title">Nos voyages</h1>
        <ul class="listing">
            <li v-for="item in items" :key="item._id">
                <NuxtLink :to="`/voyages/${item._id}`" class="text-blue-600 hover:underline font-semibold">
                    {{ item['voyages-label'] }}
                </NuxtLink>
            </li>
        </ul>
        <div class="text-gray-600 mt-4">
            {{ items.length }} voyages trouvés.
        </div>
    </section>
</template>

<script setup>
const { data } = await useFetch('https://ingrwf12.cepegra-frontend.xyz/cockpit2/api/content/items/voyages')
const items = data.value || []
</script>