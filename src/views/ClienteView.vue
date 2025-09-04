<template>
  <div class="flex flex-col h-screen">
    <InicioCliente/>
    <div class="flex flex-1">
      <SidebarCliente />
      <ContentCliente />
    </div>
    <FooterCliente />
  </div>
</template>

<script>
import ContentCliente from '@/components/ContentCliente.vue';
import FooterCliente from '@/components/FooterCliente.vue';
import InicioCliente from '@/components/InicioCliente.vue';
import SidebarCliente from '@/components/SidebarCliente.vue';



export default {
  name: "ClienteView",
  components: {
    InicioCliente,
    SidebarCliente,
    ContentCliente,
   FooterCliente
   

  }
};
</script>

<style scoped>
/* Estilos específicos para la vista de reportes si los necesitas */
</style>
