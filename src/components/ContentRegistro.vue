<template>
  <main class="register-container">
    <div class="register-box">
      <h2>Crear Cuenta</h2>

      <div class="form-group">
        <label for="nombre">Nombre completo</label>
        <input
          type="text"
          id="nombre"
          v-model="nombre"
          placeholder="Ingrese su nombre completo"
        />
      </div>

      <div class="form-group">
        <label for="usuario">Usuario</label>
        <input
          type="text"
          id="usuario"
          v-model="usuario"
          placeholder="Cree un nombre de usuario"
        />
      </div>

      <div class="form-group">
        <label for="contrasena">Contraseña</label>
        <input
          type="password"
          id="contrasena"
          v-model="contrasena"
          placeholder="Cree una contraseña"
        />
      </div>

      <div class="form-group">
        <label for="confirmar">Confirmar Contraseña</label>
        <input
          type="password"
          id="confirmar"
          v-model="confirmar"
          placeholder="Repita su contraseña"
        />
      </div>

      <p v-if="error" class="error">{{ error }}</p>
      <p v-if="mensaje" class="mensaje">{{ mensaje }}</p>

      <div class="buttons">
        <button class="btn btn-primary" @click="registrar">Registrarse</button>
        <button class="btn btn-secondary" @click="limpiar">Limpiar</button>
      </div>

      <p class="login-texto">
        ¿Ya tienes cuenta?
        <span class="link" @click="irLogin">Inicia sesión aquí</span>
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: "RegistroView",
  data() {
    return {
      nombre: "",
      usuario: "",
      contrasena: "",
      confirmar: "",
      error: "",
      mensaje: ""
    };
  },
  methods: {
    registrar() {
      // Validaciones básicas
      if (!this.nombre || !this.usuario || !this.contrasena || !this.confirmar) {
        this.error = "Todos los campos son obligatorios";
        this.mensaje = "";
        return;
      }

      if (this.contrasena !== this.confirmar) {
        this.error = "Las contraseñas no coinciden";
        this.mensaje = "";
        return;
      }

      // Guardar usuario en localStorage
      const nuevoUsuario = {
        nombre: this.nombre,
        usuario: this.usuario,
        contrasena: this.contrasena
      };

      localStorage.setItem("usuarioRegistrado", JSON.stringify(nuevoUsuario));

      this.error = "";
      this.mensaje = "✅ Registro exitoso. Redirigiendo al inicio de sesión...";

      setTimeout(() => {
        this.$router.push("/login");
      }, 1500);
    },
    limpiar() {
      this.nombre = "";
      this.usuario = "";
      this.contrasena = "";
      this.confirmar = "";
      this.error = "";
      this.mensaje = "";
    },
    irLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #003366, #0066cc);
}

.register-box {
  background: #fff;
  padding: 35px 45px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  width: 400px;
  text-align: center;
}

.register-box h2 {
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

.mensaje {
  color: #007b00;
  font-size: 14px;
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

.login-texto {
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
