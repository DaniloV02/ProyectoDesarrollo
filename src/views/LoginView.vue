<template>
  <div class="flex flex-col h-screen">
    <InicioLogin/>
    <div class="flex flex-1">
      <ContentLogin />
    </div>
    <FooterLogin />
  </div>
</template>

<script>
import ContentLogin from '@/components/ContentLogin.vue';
import FooterLogin from '@/components/FooterLogin.vue';
import InicioLogin from '@/components/InicioLogin.vue';





export default {
  name: "ClienteView",
  components: {
    InicioLogin,
    FooterLogin,
    ContentLogin

   

  }
};
</script>

<style scoped>
/* Estilos específicos para la vista de reportes si los necesitas */
</style>
