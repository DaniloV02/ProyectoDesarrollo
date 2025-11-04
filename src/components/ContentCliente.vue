<template>
  <main class="content-reporte">
    <h2 class="title">Registro de Clientes</h2>

    <!-- 🧾 Formulario -->
    <div class="form-cliente">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input v-model="cliente.nombre" type="text" id="nombre" placeholder="Ingrese el nombre" />
      </div>

      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input v-model="cliente.apellido" type="text" id="apellido" placeholder="Ingrese el apellido" />
      </div>

      <div class="form-group">
        <label for="tipoCedula">Tipo de cédula:</label>
        <select v-model="cliente.tipoCedula" id="tipoCedula">
          <option value="">Seleccione</option>
          <option value="cc">C.C.</option>
          <option value="ti">T.I.</option>
          <option value="ce">C.E.</option>
        </select>
      </div>

      <div class="form-group">
        <label for="documento">Documento:</label>
        <input v-model="cliente.documento" type="text" id="documento" placeholder="Número de documento" />
      </div>

      <div class="form-group">
        <label for="telefono">Teléfono:</label>
        <input v-model="cliente.telefono" type="text" id="telefono" placeholder="Ingrese teléfono" />
      </div>

      <div class="form-group">
        <label for="correo">Correo:</label>
        <input v-model="cliente.correo" type="email" id="correo" placeholder="Ingrese correo electrónico" />
      </div>

      <div class="form-group">
        <label for="direccion">Dirección:</label>
        <input v-model="cliente.direccion" type="text" id="direccion" placeholder="Ingrese dirección" />
      </div>

      <div class="buttons">
        <button @click="guardarCliente">{{ editando ? 'Actualizar' : 'Agregar' }}</button>
        <button @click="limpiarDatos">Limpiar</button>
      </div>
    </div>

    <!-- 📋 Tabla -->
    <div v-if="clientes.length > 0" class="tabla-clientes">
      <h3 class="subtitle">📋 Clientes Registrados</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Tipo</th>
            <th>Documento</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(c, index) in clientes" :key="index">
            <td>{{ c.nombre }}</td>
            <td>{{ c.apellido }}</td>
            <td>{{ c.tipoCedula }}</td>
            <td>{{ c.documento }}</td>
            <td>{{ c.telefono }}</td>
            <td>{{ c.correo }}</td>
            <td>{{ c.direccion }}</td>
            <td>
              <button class="btn-editar" @click="editarCliente(index)">✏️</button>
              <button class="btn-eliminar" @click="eliminarCliente(index)">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import { ref, watch, onMounted } from "vue";

export default {
  name: "ContentCliente",
  setup() {
    const cliente = ref({
      nombre: "",
      apellido: "",
      tipoCedula: "",
      documento: "",
      telefono: "",
      correo: "",
      direccion: "",
    });

    const clientes = ref(JSON.parse(localStorage.getItem("clientes")) || []);
    const editando = ref(false);
    const indiceEdicion = ref(null);

    // 🔄 Guardar en localStorage automáticamente
    watch(
      clientes,
      (nuevos) => {
        localStorage.setItem("clientes", JSON.stringify(nuevos));
      },
      { deep: true }
    );

    const guardarCliente = () => {
      if (!cliente.value.nombre.trim() || !cliente.value.documento.trim()) {
        alert("⚠️ Por favor completa al menos el nombre y el documento.");
        return;
      }

      // 🚫 Evitar duplicados (por documento o correo)
      const duplicado = clientes.value.some(
        (c, index) =>
          (c.documento === cliente.value.documento || c.correo === cliente.value.correo) &&
          index !== indiceEdicion.value
      );

      if (duplicado) {
        alert("🚫 Este cliente ya está registrado (documento o correo repetido).");
        return;
      }

      if (editando.value) {
        clientes.value[indiceEdicion.value] = { ...cliente.value };
        alert("✅ Cliente actualizado correctamente.");
        editando.value = false;
      } else {
        clientes.value.push({ ...cliente.value });
        alert("✅ Cliente agregado correctamente.");
      }

      limpiarDatos();
    };

    const limpiarDatos = () => {
      for (const key in cliente.value) cliente.value[key] = "";
      editando.value = false;
      indiceEdicion.value = null;
    };

    const editarCliente = (index) => {
      cliente.value = { ...clientes.value[index] };
      editando.value = true;
      indiceEdicion.value = index;
    };

    const eliminarCliente = (index) => {
      if (confirm("¿Seguro que deseas eliminar este cliente?")) {
        clientes.value.splice(index, 1);
        alert("🗑️ Cliente eliminado correctamente.");
      }
    };

    onMounted(() => {
      const data = localStorage.getItem("clientes");
      if (data) clientes.value = JSON.parse(data);
    });

    return { cliente, clientes, guardarCliente, limpiarDatos, editarCliente, eliminarCliente, editando };
  },
};
</script>


<style scoped>
.content-reporte {
  margin-left: 220px;
  margin-top: 60px;
  padding: 20px;
  min-height: calc(100vh - 100px);
  background: #f5f5f5;
}

.title {
  font-size: 22px;
  margin-bottom: 20px;
  color: #003366;
}

.subtitle {
  margin-top: 30px;
  font-size: 18px;
  color: #003366;
}

.form-cliente {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
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

/* 📋 Tabla */
.tabla-clientes {
  margin-top: 25px;
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px 10px;
  border-bottom: 1px solid #ddd;
  text-align: left;
  font-size: 14px;
}

th {
  background-color: #0066cc;
  color: white;
}

td button {
  border: none;
  cursor: pointer;
  background: none;
  font-size: 16px;
}

.btn-editar {
  color: #007bff;
}

.btn-editar:hover {
  color: #0056b3;
}

.btn-eliminar {
  color: #e74c3c;
}

.btn-eliminar:hover {
  color: #c0392b;
}
</style>
