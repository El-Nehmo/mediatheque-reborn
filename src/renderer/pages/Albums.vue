<template>
  <div class="albums-list">
    <h1>Liste des albums</h1>
    <form @submit.prevent="createAlbum">
      <h2>Ajouter un album</h2>
      <input v-model="form.titre" placeholder="Titre" required />
      <input v-model="form.artiste" placeholder="Artiste" required />
      <input v-model="form.ean" placeholder="EAN" required />
      <input v-model="form.maison_disque" placeholder="Maison de disque" />
      <input v-model.number="form.annee_sortie" placeholder="Année de sortie" type="number" />
      <input v-model.number="form.nb_pistes" placeholder="Nombre de pistes" type="number" />
      <textarea v-model="form.description" placeholder="Description"></textarea>
      <button type="submit">Créer</button>
    </form>
    <div v-if="albums.length">
      <ul>
        <li v-for="album in albums" :key="album.id_album">
          {{ album.titre }} — {{ album.artiste }}
          <button @click="editAlbum(album)">Modifier</button>
          <button @click="deleteAlbum(album.id_album)">Supprimer</button>
        </li>
      </ul>
    </div>
    <div v-if="editingAlbum">
      <form @submit.prevent="updateAlbum">
        <h2>Modifier l'album</h2>
        <input v-model="editForm.titre" placeholder="Titre" required />
        <input v-model="editForm.artiste" placeholder="Artiste" required />
        <input v-model="editForm.ean" placeholder="EAN" required />
        <input v-model="editForm.maison_disque" placeholder="Maison de disque" />
        <input v-model.number="editForm.annee_sortie" placeholder="Année de sortie" type="number" />
        <input v-model.number="editForm.nb_pistes" placeholder="Nombre de pistes" type="number" />
        <textarea v-model="editForm.description" placeholder="Description"></textarea>
        <button type="submit">Enregistrer</button>
        <button type="button" @click="cancelEdit">Annuler</button>
      </form>
    </div>
    <div v-else>
      <p>Aucun album trouvé.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import '../../style/album-form.css';

const albums = ref<any[]>([]);
const form = ref({
  titre: '',
  artiste: '',
  ean: '',
  maison_disque: '',
  annee_sortie: null,
  nb_pistes: null,
  description: ''
});

const editingAlbum = ref<any|null>(null);
const editForm = ref({
  titre: '',
  artiste: '',
  ean: '',
  maison_disque: '',
  annee_sortie: null,
  nb_pistes: null,
  description: ''
});

function editAlbum(album: any) {
  editingAlbum.value = album;
  Object.assign(editForm.value, album);
}

function cancelEdit() {
  editingAlbum.value = null;
  Object.assign(editForm.value, {
    titre: '', artiste: '', ean: '', maison_disque: '', annee_sortie: null, nb_pistes: null, description: ''
  });
}

async function fetchAlbums() {
  try {
    albums.value = await window.electronService.getAlbums();
  } catch (error) {
    console.error('Erreur IPC getAlbums:', error);
  }
}

async function createAlbum() {
  try {
    await window.electronService.createAlbum({ ...form.value });
    await fetchAlbums();
    Object.assign(form.value, {
      titre: '', artiste: '', ean: '', maison_disque: '', annee_sortie: null, nb_pistes: null, description: ''
    });
  } catch (error) {
    console.error('Erreur IPC createAlbum:', error);
  }
}

async function updateAlbum() {
  if (!editingAlbum.value) return;
  try {
    await window.electronService.updateAlbum(editingAlbum.value.id_album, { ...editForm.value });
    await fetchAlbums();
    cancelEdit();
  } catch (error) {
    console.error('Erreur IPC updateAlbum:', error);
  }
}

async function deleteAlbum(id: number) {
  if (!confirm('Voulez-vous vraiment supprimer cet album ?')) return;
  try {
    await window.electronService.deleteAlbum(id);
    await fetchAlbums();
  } catch (error) {
    console.error('Erreur IPC deleteAlbum:', error);
  }
}

onMounted(fetchAlbums);
</script>


