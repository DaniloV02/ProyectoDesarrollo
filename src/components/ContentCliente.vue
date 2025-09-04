<template>
  <main class="content-reporte">
    <h2 class="title">Registro de Clientes</h2>

    <div class="form-cliente">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" placeholder="Ingrese el nombre" />
      </div>

      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" placeholder="Ingrese el apellido" />
      </div>

      <div class="form-group">
        <label for="tipoCedula">Tipo de cédula:</label>
        <select id="tipoCedula">
          <option value="">Seleccione</option>
          <option value="cc">C.C.</option>
          <option value="ti">T.I.</option>
          <option value="ce">C.E.</option>
        </select>
      </div>

      <div class="form-group">
        <label for="documento">Documento:</label>
        <input type="text" id="documento" placeholder="Número de documento" />
      </div>

      <div class="form-group">
        <label for="telefono">Teléfono:</label>
        <input type="text" id="telefono" placeholder="Ingrese teléfono" />
      </div>

      <div class="form-group">
        <label for="correo">Correo:</label>
        <input type="email" id="correo" placeholder="Ingrese correo electrónico" />
      </div>

      <div class="form-group">
        <label for="direccion">Dirección:</label>
        <input type="text" id="direccion" placeholder="Ingrese dirección" />
      </div>

      <div class="buttons">
        <button id="agregar">Agregar</button>
        <button id="limpiar">Limpiar Datos</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ContentCliente"
}
</script>

<style scoped>
.content-reporte {
  margin-left: 220px; /* ancho del sidebar */
  margin-top: 60px; /* altura del header */
  padding: 20px;
  min-height: calc(100vh - 100px); /* header + footer */
  background: #f5f5f5;
}

.title {
  font-size: 22px;
  margin-bottom: 20px;
  color: #003366;
}

.form-cliente {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.form-group input,
.form-group select {
  padding: 8px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.buttons {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}

.buttons button {
  padding: 10px 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: #0066cc;
  color: white;
  font-weight: bold;
  transition: background 0.3s;
}

.buttons button:hover {
  background: #004080;
}
</style>