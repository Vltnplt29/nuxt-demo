<template>
    <div class="min-h-screen bg-gray-50">
        <header class="bg-white shadow">
            <nav class="container mx-auto flex items-center gap-6 py-4 px-6">
                <NuxtLink to="/" class="text-blue-700 font-bold text-lg hover:underline">Home</NuxtLink>
                <NuxtLink to="/voyages" class="text-blue-700 font-bold text-lg hover:underline">Voyages</NuxtLink>
                <NuxtLink to="/about" class="text-blue-700 font-bold text-lg hover:underline">About</NuxtLink>
                <NuxtLink to="/pays" class="text-blue-700 font-bold text-lg hover:underline">Pays</NuxtLink>

            </nav>
        </header>
        <main class="container mx-auto py-8 px-4">
            <NuxtPage />
            <Mybutton />
        </main>
    </div>
</template>