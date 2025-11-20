<template>
  <div class="register-form">
    <h1>Inscription</h1>
    <form @submit.prevent="register">
      <input v-model="nom" type="text" placeholder="Nom" required />
      <input v-model="prenom" type="text" placeholder="Prénom" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Mot de passe" required />
      <button type="submit">S'inscrire</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
    <p v-if="success" class="success">{{ success }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const nom = ref('');
const prenom = ref('');
const email = ref('');
const password = ref('');
const error = ref('');
const success = ref('');

async function register() {
  error.value = '';
  success.value = '';
  try {
    const result = await window.electronService.createUtilisateur({
      nom: nom.value,
      prenom: prenom.value,
      email: email.value,
      password_hash: password.value,
      id_role: 2 // rôle par défaut, à adapter si besoin
    });
    if (!result.success) {
      error.value = result.error || "Inscription échouée";
    } else {
      success.value = "Inscription réussie !";
      nom.value = '';
      prenom.value = '';
      email.value = '';
      password.value = '';
    }
  } catch (e) {
    error.value = "Erreur lors de l'inscription.";
  }
}
</script>

<style scoped>
.register-form {
  max-width: 400px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
}
.register-form h1 {
  text-align: center;
}
.register-form input {
  display: block;
  width: 100%;
  margin-bottom: 16px;
  padding: 8px;
  font-size: 16px;
}
.register-form button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.error {
  color: #d32f2f;
  text-align: center;
  margin-top: 12px;
}
.success {
  color: #388e3c;
  text-align: center;
  margin-top: 12px;
}
</style>
