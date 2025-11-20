<template>
  <div class="paiements-page">
    <h1>Paiements</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Utilisateur</th>
          <th>Montant</th>
          <th>Date paiement</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="paiement in paiements" :key="paiement.id_paiement">
          <td>{{ paiement.id_paiement }}</td>
          <td>{{ paiement.id_utilisateur }}</td>
          <td>{{ paiement.montant }}</td>
          <td>{{ paiement.date_paiement }}</td>
          <td>{{ paiement.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const paiements = ref<any[]>([])

onMounted(async () => {
  paiements.value = await window.electronService.getPaiements()
})
</script>

<style scoped>
.paiements-page {
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
