<template>
  <div class="home">
    <HeaderPrincipal />
    <SidebarCentral />
    <ContentCentral />
    <FooterCentral />
  </div>
</template>

<script>
import ContentCentral from "@/components/ContentCentral.vue";
import FooterCentral from "@/components/FooterCentral.vue";
import HeaderPrincipal from "@/components/HeaderPrincipal.vue";
import SidebarCentral from "@/components/SidebarCentral.vue";

export default {
  name: "HomeView",
  components: {
    HeaderPrincipal,
    SidebarCentral,
    ContentCentral,
    FooterCentral

  }
}
</script>