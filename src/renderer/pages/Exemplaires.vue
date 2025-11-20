<template>
  <div class="exemplaires-list">
    <h1>Liste des exemplaires</h1>
    <div v-if="exemplaires.length">
      <ul>
        <li v-for="exemplaire in exemplaires" :key="exemplaire.id_exemplaire">
          {{ exemplaire.num_inventaire }} — {{ exemplaire.etat }} — {{ exemplaire.statut }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Aucun exemplaire trouvé.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const exemplaires = ref<any[]>([]);

onMounted(async () => {
  try {
    exemplaires.value = await window.electronService.getExemplaires();
  } catch (error) {
    console.error('Erreur IPC getExemplaires:', error);
  }
});
</script>

<style scoped>
.exemplaires-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
