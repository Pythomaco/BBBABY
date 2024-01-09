<template>
    <div id="app">
      <!-- Menú cargado desde un archivo HTML -->
      <div v-html="menuHTML"></div>
  
      <!-- Contenido de las rutas -->
      <router-view></router-view>
  
      <!-- Footer cargado desde un archivo HTML -->
      <div v-html="footerHTML"></div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // Importa axios o usa tu método preferido para cargar archivos
  
  export default {
    name: 'App',
    data() {
      return {
        menuHTML: '', // Variable para almacenar el contenido del menú
        footerHTML: '' // Variable para almacenar el contenido del footer
      };
    },
    mounted() {
      // Carga el contenido HTML del menú y del footer
      this.loadMenuHTML();
      this.loadFooterHTML();
    },
    methods: {
      async loadMenuHTML() {
        try {
          const response = await axios.get('navegacion.html'); // Reemplaza con la ruta de tu archivo de menú
          this.menuHTML = response.data;
        } catch (error) {
          console.error('Error al cargar el menú:', error);
        }
      },
      async loadFooterHTML() {
        try {
          const response = await axios.get('footer.html'); // Reemplaza con la ruta de tu archivo de footer
          this.footerHTML = response.data;
        } catch (error) {
          console.error('Error al cargar el footer:', error);
        }
      }
    }
  };
  </script>
  
  <style>
  /* Estilos para el menú y el footer */
  </style>