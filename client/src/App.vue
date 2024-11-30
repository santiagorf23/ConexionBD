<template>
  <div id="app">
    <nav>
      <router-link to="/users">Usuarios</router-link>
      <!-- Agregar más enlaces según necesites -->
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>