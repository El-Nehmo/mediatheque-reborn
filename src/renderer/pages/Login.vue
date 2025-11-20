<template>
  <div class="login-form">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const error = ref('');

async function login() {
  error.value = '';
  try {

    const result = await window.electronService.loginUser({ email: email.value, password: password.value });
    if (!result.success) {
      error.value = result.error || 'Login failed';
    } else {
    
    }
  } catch (e) {
    error.value = 'An error occurred during login.';
  }
}
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
}
.login-form h1 {
  text-align: center;
}
.login-form input {
  display: block;
  width: 100%;
  margin-bottom: 16px;
  padding: 8px;
  font-size: 16px;
}
.login-form button {
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
</style>
