<template>
  <section class="content">
    <div class="card">
      <h2 class="welcome">
        Bienvenido, hoy será un grandioso día!
      </h2>
      <video 
        class="video"
        src="@/assets/Empresa.mp4" 
        autoplay 
        muted 
        loop 
        controls
      >
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContentCentral"
}
</script>

<style scoped>
.content {
  margin-left: 220px; 
  margin-top: 60px;   
  padding: 30px;
  min-height: calc(100vh - 60px);
  background: linear-gradient(to bottom, #f9f9f9, #ececec);
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background: white;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  text-align: center;
  max-width: 700px;
}

.welcome {
  font-size: 26px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.video {
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  border: 3px solid #fff;
  box-shadow: 0 6px 14px rgba(0,0,0,0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.video:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 18px rgba(0,0,0,0.3);
}
</style>
