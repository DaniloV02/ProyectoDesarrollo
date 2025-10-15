<template>
  <div class="flex flex-col h-screen">
    <InicioRegistro/>
    <div class="flex flex-1">
      <ContentRegistro />
    </div>
    <FooterRegistro />
  </div>
</template>

<script>
import ContentRegistro from '@/components/ContentRegistro.vue';
import FooterRegistro from '@/components/FooterRegistro.vue';
import InicioRegistro from '@/components/InicioRegistro.vue';





export default {
  name: "ClienteView",
  components: {
InicioRegistro,
FooterRegistro,
ContentRegistro

   

  }
};
</script>

<style scoped>
/* Estilos específicos para la vista de reportes si los necesitas */
</style>
