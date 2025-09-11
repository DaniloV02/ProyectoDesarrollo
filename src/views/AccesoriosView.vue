<template>
  <div class="flex flex-col h-screen">
    <InicioAccesorios />
    <div class="flex flex-1">
      <SiderbarAccesorios />
      <ContentAccesorios />
    </div>
    <FooterAccesorios />
  </div>
</template>

<script>
import ContentAccesorios from '@/components/ContentAccesorios.vue';
import FooterAccesorios from '@/components/FooterAccesorios.vue';
import InicioAccesorios from '@/components/InicioAccesorios.vue';
import SiderbarAccesorios from '@/components/SiderbarAccesorios.vue';





export default {
  name: "ReporteView",
  components: {
    InicioAccesorios,
    SiderbarAccesorios,
    FooterAccesorios,
    ContentAccesorios
  
  }
};
</script>

<style scoped>
/* Puedes añadir estilos específicos para esta vista aquí */
</style>
