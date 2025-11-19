<template>
  <div class="categories-list">
    <h1>Liste des catégories</h1>
    <div v-if="categories.length">
      <ul>
        <li v-for="categorie in categories" :key="categorie.id_categorie">
          {{ categorie.nom_categorie }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Aucune catégorie trouvée.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const categories = ref<any[]>([]);

onMounted(async () => {
  try {
    categories.value = await window.electronService.getCategories();
  } catch (error) {
    console.error('Erreur IPC getCategories:', error);
  }
});
</script>

<style scoped>
.categories-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
