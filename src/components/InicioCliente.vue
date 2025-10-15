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
        <span class="label">Nombre:</span> {{ nombreUsuario }}
      </div>
      <button class="login-btn" title="Iniciar sesión" @click="irLogin">
        {{ estaLogueado ? 'Cerrar sesión' : 'Login' }}
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "InicioCliente",
  data() {
    return {
      nombreUsuario: "Invitado",
      estaLogueado: false
    };
  },
  mounted() {
    // 🔹 Leer usuario del localStorage
    const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
    if (usuarioActivo && usuarioActivo.nombre) {
      this.nombreUsuario = usuarioActivo.nombre;
      this.estaLogueado = true;
    }
  },
  methods: {
    irLogin() {
      if (this.estaLogueado) {
        // 🔹 Si ya está logueado, cerrar sesión
        localStorage.removeItem("usuarioActivo");
        this.nombreUsuario = "Invitado";
        this.estaLogueado = false;
        this.$router.push("/");
      } else {
        // 🔹 Si no ha iniciado sesión, ir al login
        this.$router.push("/login");
      }
    }
  }
};
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

.login-btn {
  background: #ffcc00;
  border: none;
  color: #003366;
  font-weight: bold;
  font-size: 14px;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  transition: background 0.3s, transform 0.2s;
}

.login-btn:hover {
  background: #ffdb4d;
  transform: scale(1.05);
}
</style>
