
<template>
    <button
        class="my-button shadow-lg"
        :disabled="timerActive"
        @click="startTimer"
    >
        {{ timerActive ? `Timer: ${timer}` : 'Démarrer le timer' }}
    </button>
</template>

<script setup>
import { ref, watch } from 'vue'
const timer = ref(30)
const timerActive = ref(false)
let interval = null

const emit = defineEmits(['finished'])

function startTimer() {
    if (timerActive.value) return
    timer.value = 30
    timerActive.value = true
    interval = setInterval(() => {
        if (timer.value > 0) {
            timer.value--
        } else {
            stopTimer()
        }
    }, 1000)
}

function stopTimer() {
    timerActive.value = false
    clearInterval(interval)
    emit('finished', timer.value)
}

watch(timerActive, (active) => {
    if (!active && interval) clearInterval(interval)
})
</script>