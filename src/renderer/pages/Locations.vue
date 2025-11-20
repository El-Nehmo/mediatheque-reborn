<template>
  <div class="locations-page">
    <h1>Locations</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Exemplaire</th>
          <th>Utilisateur</th>
          <th>Date de location</th>
          <th>Date retour prévue</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="location in locations" :key="location.id_location">
          <td>{{ location.id_location }}</td>
          <td>{{ location.id_exemplaire }}</td>
          <td>{{ location.id_utilisateur }}</td>
          <td>{{ location.date_location }}</td>
          <td>{{ location.date_retour_prevue }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const locations = ref<any[]>([])

onMounted(async () => {
  locations.value = await window.electronService.getLocations()
})
</script>

<style scoped>
.locations-page {
  padding: 2rem;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}
th {
  background: #f5f5f5;
}
</style>
