<template>
  <main class="login-container">
    <div class="login-box">
      <h2>Iniciar Sesión</h2>

      <div class="form-group">
        <label for="usuario">Usuario</label>
        <input
          type="text"
          id="usuario"
          v-model="usuario"
          placeholder="Ingrese su usuario"
        />
      </div>

      <div class="form-group">
        <label for="contrasena">Contraseña</label>
        <input
          type="password"
          id="contrasena"
          v-model="contrasena"
          placeholder="Ingrese su contraseña"
        />
      </div>

      <p v-if="error" class="error">{{ error }}</p>

      <div class="buttons">
        <button class="btn btn-primary" @click="login">Ingresar</button>
        <button class="btn btn-secondary" @click="limpiar">Limpiar</button>
      </div>

      <p class="registro-texto">
        ¿No tienes cuenta?
        <span class="link" @click="irRegistro">Regístrate aquí</span>
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      usuario: "",
      contrasena: "",
      error: ""
    };
  },
  methods: {
    login() {
      const guardado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

      if (!guardado) {
        this.error = "No hay ningún usuario registrado.";
        return;
      }

      if (this.usuario === guardado.usuario && this.contrasena === guardado.contrasena) {

        localStorage.setItem("usuarioActivo", JSON.stringify({
          nombre: guardado.nombre,
          usuario: guardado.usuario
        }));

        this.$router.push("/");
      } else {
        this.error = "Usuario o contraseña incorrectos";
      }
    },
    limpiar() {
      this.usuario = "";
      this.contrasena = "";
      this.error = "";
    },
    irRegistro() {
      this.$router.push("/register");
    }
  }
};
</script>



<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #003366, #0066cc);
}

.login-box {
  background: #fff;
  padding: 30px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  width: 380px;
  text-align: center;
}

.login-box h2 {
  margin-bottom: 20px;
  color: #003366;
}

.form-group {
  text-align: left;
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
}

.error {
  color: #d93025;
  font-size: 14px;
  margin-top: -5px;
  margin-bottom: 10px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
}

.btn {
  flex: 1;
  padding: 10px 15px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.btn-primary {
  background-color: #0066cc;
  color: white;
}

.btn-primary:hover {
  background-color: #004080;
  transform: scale(1.05);
}

.btn-secondary {
  background-color: #999;
  color: white;
}

.btn-secondary:hover {
  background-color: #777;
  transform: scale(1.05);
}

.registro-texto {
  margin-top: 15px;
  font-size: 14px;
  color: #333;
}

.link {
  color: #0066cc;
  font-weight: bold;
  cursor: pointer;
}

.link:hover {
  text-decoration: underline;
}
</style>
