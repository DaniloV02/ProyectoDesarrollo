<template>
  <div class="flex flex-col h-screen">
    <InicioProveedor />
    <div class="flex flex-1">
      <SiderbarProveedor />
      <ContentProveedor />
    </div>
    <FooterProveedor />
  </div>
</template>

<script>
import ContentProveedor from '@/components/ContentProveedor.vue';
import FooterProveedor from '@/components/FooterProveedor.vue';
import InicioProveedor from '@/components/InicioProveedor.vue';
import SiderbarProveedor from '@/components/SiderbarProveedor.vue';





export default {
  name: "ReporteView",
  components: {
    InicioProveedor,
    SiderbarProveedor,
    FooterProveedor,
    ContentProveedor
  
  }
};
</script>

<style scoped>
/* Puedes añadir estilos específicos para esta vista aquí */
</style>
