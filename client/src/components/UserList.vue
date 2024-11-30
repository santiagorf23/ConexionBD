<template>
    <div class="user-list">
      <h2>Lista de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td>{{ user.nombre }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.rol }}</td>
            <td>
              <button @click="editUser(user)">Editar</button>
              <button @click="deleteUser(user._id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import api from '../services/api'
  
  export default {
    name: 'UserList',
    data() {
      return {
        users: []
      }
    },
    async created() {
      try {
        const response = await api.get('/api/users')
        this.users = response.data
      } catch (error) {
        console.error('Error al cargar usuarios:', error)
      }
    },
    methods: {
      editUser(user) {
        // Implementar lógica de edición
      },
      async deleteUser(id) {
        // Implementar lógica de eliminación
      }
    }
  }
  </script>