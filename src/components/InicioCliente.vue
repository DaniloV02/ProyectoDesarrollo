<template>
  <header class="header">
    <div class="logo-section">
      <img
        src="../assets/LogoEmpre.jpg"
        alt="Logo Empresa"
        class="logo"
      />
      <h1 class="empresa">Empresa X</h1>
    </div>
    <div class="user-section">
      <div class="user-info">
        <span class="label">Nombre:</span> Fernando
      </div>
      <button class="logout" title="Cerrar sesión">✖</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "InicioCliente"
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #003366, #0066cc);
  padding: 12px 24px;
  color: white;
  height: 60px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 50%;
  padding: 5px;
  object-fit: cover;
  box-shadow: 0 0 6px rgba(0,0,0,0.2);
}

.empresa {
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.user-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

.user-info {
  background: #ffffff;
  color: #333;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.label {
  font-weight: bold;
  color: #004080;
}

.logout {
  background: transparent;
  border: none;
  font-size: 20px;
  color: white;
  cursor: pointer;
  transition: transform 0.2s, color 0.2s;
}

.logout:hover {
  color: #ffcc00;
  transform: scale(1.2);
}
</style>
