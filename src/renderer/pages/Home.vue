<template>
  <div class="list-container">
    <h1>Médiathèque</h1>
    <p>Bienvenue dans votre médiathèque</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(async () => {
  // Charger les données de la médiathèque
});
</script>

<style scoped>

.list-container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 1rem;
  padding: 1rem;
  max-width: 75%;
}

</style>