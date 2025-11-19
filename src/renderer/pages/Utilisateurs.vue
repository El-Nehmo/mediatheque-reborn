<template>
  <div class="utilisateurs-list">
    <h1>Liste des utilisateurs</h1>
    <div v-if="utilisateurs.length">
      <ul>
        <li v-for="utilisateur in utilisateurs" :key="utilisateur.id_utilisateur">
          {{ utilisateur.nom }} {{ utilisateur.prenom }} — {{ utilisateur.email }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Aucun utilisateur trouvé.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const utilisateurs = ref<any[]>([]);

onMounted(async () => {
  try {
    utilisateurs.value = await window.electronService.getUtilisateurs();
  } catch (error) {
    console.error('Erreur IPC getUtilisateurs:', error);
  }
});
</script>

<style scoped>
.utilisateurs-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
