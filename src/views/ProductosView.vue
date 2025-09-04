<template>
  <div class="flex flex-col h-screen">
    <InicioProductos/>
    <div class="flex flex-1">
      <SiderbarProductos />
      <ContentProductos />
    </div>
    <FooterProductos />
  </div>
</template>

<script>
import ContentProductos from '@/components/ContentProductos.vue';
import FooterProductos from '@/components/FooterProductos.vue';
import InicioProductos from '@/components/InicioProductos.vue';
import SiderbarProductos from '@/components/SiderbarProductos.vue';





export default {
  name: "ProductosView",
  components: {
    InicioProductos,
    SiderbarProductos,
    ContentProductos,
    FooterProductos


  }
};
</script>

<style scoped>
/* Estilos específicos para la vista de reportes si los necesitas */
</style>
