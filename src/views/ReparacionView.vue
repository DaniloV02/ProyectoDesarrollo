<template>
  <div class="flex flex-col h-screen">
    <InicioReparacion />
    <div class="flex flex-1">
      <SidebarReparacion />
      <ContentReparacion />
    </div>
    <FooterReparacion />
  </div>
</template>

<script>
import InicioReparacion from "@/components/InicioReparacion.vue";
import SidebarReparacion from "@/components/SidebarReparacion.vue";
import ContentReparacion from "@/components/ContentReparacion.vue";
import FooterReparacion from "@/components/FooterReparacion.vue";

export default {
  name: "ReparacionesView",
  components: {
    InicioReparacion,
    SidebarReparacion,
    ContentReparacion,
    FooterReparacion
  }
};
</script>

<style scoped>
/* Puedes añadir estilos específicos para esta vista aquí */
</style>
