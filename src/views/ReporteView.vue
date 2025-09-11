<template>
  <div class="flex flex-col h-screen">
    <IniciosReporte />
    <div class="flex flex-1">
      <SiderbarReporte />
      <ContentReporte />
    </div>
    <FooterReporte />
  </div>
</template>

<script>
import ContentReporte from '@/components/ContentReporte.vue';
import FooterReporte from '@/components/FooterReporte.vue';
import IniciosReporte from '@/components/IniciosReporte.vue';
import SiderbarReporte from '@/components/SiderbarReporte.vue';



export default {
  name: "ReporteView",
  components: {
    IniciosReporte,
    SiderbarReporte,
    FooterReporte,
    ContentReporte
  
  }
};
</script>

<style scoped>
/* Puedes añadir estilos específicos para esta vista aquí */
</style>
