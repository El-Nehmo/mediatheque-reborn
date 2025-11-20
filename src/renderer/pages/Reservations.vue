<template>
  <div class="reservations-page">
    <h1>Réservations</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Utilisateur</th>
          <th>Exemplaire</th>
          <th>Date réservation</th>
          <th>Date expiration</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reservation in reservations" :key="reservation.id_reservation">
          <td>{{ reservation.id_reservation }}</td>
          <td>{{ reservation.id_utilisateur }}</td>
          <td>{{ reservation.id_exemplaire }}</td>
          <td>{{ reservation.date_reservation }}</td>
          <td>{{ reservation.date_expiration }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const reservations = ref<any[]>([])

onMounted(async () => {
  reservations.value = await window.electronService.getReservations()
})
</script>

<style scoped>
.reservations-page {
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
