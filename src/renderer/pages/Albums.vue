<template>
  <div class="albums-list">
    <h1>Liste des albums</h1>
    <div v-if="albums.length">
      <ul>
        <li v-for="album in albums" :key="album.id_album">
          {{ album.titre }} — {{ album.artiste }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Aucun album trouvé.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const albums = ref<any[]>([]);

onMounted(async () => {
  try {
    albums.value = await window.electronService.getAlbums();
  } catch (error) {
    console.error('Erreur IPC getAlbums:', error);
  }
});
</script>

<style scoped>
.albums-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
