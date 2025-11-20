<template>
  <div class="album-detail">
    <h1>Détail de l'album</h1>
    <div v-if="album">
      <p><strong>Titre :</strong> {{ album.titre }}</p>
      <p><strong>Artiste :</strong> {{ album.artiste }}</p>
      <p><strong>Maison de disque :</strong> {{ album.maison_disque }}</p>
      <p><strong>Année de sortie :</strong> {{ album.annee_sortie }}</p>
      <p><strong>Nombre de pistes :</strong> {{ album.nb_pistes }}</p>
      <p><strong>Description :</strong> {{ album.description }}</p>
      <p><strong>EAN :</strong> {{ album.ean }}</p>
    </div>
    <div v-else>
      <p>Aucun album sélectionné.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const album = ref<any | null>(null);
const route = useRoute();

onMounted(async () => {
  const id = Number(route.params.id_album);
  if (id) {
    try {
      album.value = await window.electronService.getAlbumById(id);
    } catch (error) {
      console.error('Erreur IPC getAlbumById:', error);
    }
  }
});
</script>

<style scoped>
.album-detail {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
