<template>
  <main class="flex-1 p-6 bg-white overflow-y-auto">
    <!-- BUSCAR CLIENTE -->
    <div class="mb-4">
      <input
        v-model="buscar"
        type="text"
        placeholder="Buscar cliente"
        class="border px-3 py-2 rounded w-1/3"
      />
    </div>

    <!-- TABLA DE REGISTROS -->
    <div class="border rounded mb-6">
      <table class="w-full text-sm border-collapse">
        <thead class="bg-gray-200">
          <tr>
            <th class="border px-2 py-1">Cliente</th>
            <th class="border px-2 py-1">Modelo</th>
            <th class="border px-2 py-1">Marca</th>
            <th class="border px-2 py-1">Servicio</th>
            <th class="border px-2 py-1">Pago</th>
            <th class="border px-2 py-1">Repuesto</th>
            <th class="border px-2 py-1">Cobro</th>
            <th class="border px-2 py-1">Descripción</th>
            <th class="border px-2 py-1">Acciones</th> <!-- 👈 nueva columna -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listaFiltrada" :key="index">
            <td class="border px-2 py-1">{{ item.cliente }}</td>
            <td class="border px-2 py-1">{{ item.modelo }}</td>
            <td class="border px-2 py-1">{{ item.marca }}</td>
            <td class="border px-2 py-1">{{ item.servicio }}</td>
            <td class="border px-2 py-1">{{ item.pago }}</td>
            <td class="border px-2 py-1">{{ item.repuesto }}</td>
            <td class="border px-2 py-1">{{ item.cobro }}</td>
            <td class="border px-2 py-1">{{ item.descripcion }}</td>
            <td class="border px-2 py-1 text-center">
              <button
                class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                @click="eliminarRegistro(index)"
              >
                🗑️ Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- FORMULARIO -->
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label>Nombre del cliente</label>
        <input v-model="reparacion.cliente" type="text" class="w-full border p-2 rounded mb-2" />

        <label>Modelo del teléfono</label>
        <input v-model="reparacion.modelo" type="text" class="w-full border p-2 rounded mb-2" />

        <label>Marca del teléfono</label>
        <input v-model="reparacion.marca" type="text" class="w-full border p-2 rounded mb-2" />

        <label>Tipo de servicio</label>
        <input v-model="reparacion.servicio" type="text" class="w-full border p-2 rounded mb-2" />

        <label>Método de Pago</label>
        <select v-model="reparacion.pago" class="w-full border p-2 rounded mb-2">
          <option value="Efectivo">Efectivo</option>
          <option value="Tarjeta">Tarjeta</option>
          <option value="Transferencia">Transferencia</option>
        </select>

        <label>Repuesto</label>
        <input v-model="reparacion.repuesto" type="text" class="w-full border p-2 rounded mb-2" />
      </div>

      <div>
        <p>¿Trae forro?</p>
        <label><input type="radio" value="Sí" v-model="reparacion.forro" /> Sí</label>
        <label><input type="radio" value="No" v-model="reparacion.forro" /> No</label>

        <p class="mt-2">¿Trae SIM?</p>
        <label><input type="radio" value="Sí" v-model="reparacion.sim" /> Sí</label>
        <label><input type="radio" value="No" v-model="reparacion.sim" /> No</label>

        <label class="block mt-4">Cobro (PV)</label>
        <input v-model="reparacion.cobro" type="text" class="w-full border p-2 rounded mb-2" />

        <label>Descripción o información importante</label>
        <textarea v-model="reparacion.descripcion" class="w-full border p-2 rounded mb-2"></textarea>
      </div>
    </div>

    <div class="flex space-x-4 mt-4">
      <button
        class="px-4 py-2 bg-green-500 text-white rounded"
        @click="guardarReparacion"
      >
        Enviar Solicitud
      </button>
      <button
        class="px-4 py-2 bg-gray-400 text-white rounded"
        @click="limpiarFormulario"
      >
        Limpiar Solicitud
      </button>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const buscar = ref("");
const reparacion = ref({
  cliente: "",
  modelo: "",
  marca: "",
  servicio: "",
  pago: "Efectivo",
  repuesto: "",
  forro: "",
  sim: "",
  cobro: "",
  descripcion: "",
});

const registros = ref(JSON.parse(localStorage.getItem("reparaciones")) || []);

const listaFiltrada = computed(() =>
  registros.value.filter((r) =>
    r.cliente.toLowerCase().includes(buscar.value.toLowerCase())
  )
);

watch(
  registros,
  (nuevaLista) => {
    localStorage.setItem("reparaciones", JSON.stringify(nuevaLista));
  },
  { deep: true }
);

const guardarReparacion = () => {
  if (!reparacion.value.cliente || !reparacion.value.modelo || !reparacion.value.marca) {
    alert("⚠️ Completa todos los campos requeridos.");
    return;
  }

  registros.value.push({ ...reparacion.value });
  alert("✅ Solicitud guardada correctamente.");
  limpiarFormulario();
};

const limpiarFormulario = () => {
  reparacion.value = {
    cliente: "",
    modelo: "",
    marca: "",
    servicio: "",
    pago: "Efectivo",
    repuesto: "",
    forro: "",
    sim: "",
    cobro: "",
    descripcion: "",
  };
};

const eliminarRegistro = (index) => {
  if (confirm("¿Seguro que deseas eliminar este registro?")) {
    registros.value.splice(index, 1);
    localStorage.setItem("reparaciones", JSON.stringify(registros.value));
  }
};
</script>

<style scoped>

main {
  padding: 80px 24px 24px;
  background-color: #ffffff;
  font-family: "Segoe UI", sans-serif;
  color: #333;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

input[placeholder="Buscar cliente"] {
  border: 1px solid #ccc;
  padding: 6px 10px;
  border-radius: 6px;
  width: 250px;
  font-size: 14px;
  transition: border 0.2s, box-shadow 0.2s;
}

input[placeholder="Buscar cliente"]:focus {
  border-color: #0066cc;
  box-shadow: 0 0 4px rgba(0, 102, 204, 0.4);
  outline: none;
}

table {
  border-collapse: collapse;
  width: 100%;
  font-size: 13px;
}

table th,
table td {
  border: 1px solid #ccc;
  padding: 6px 8px;
  text-align: left;
}

thead {
  background-color: #e0e0e0;
  font-weight: 600;
}

button {
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
}

button:hover {
  transform: scale(1.03);
}

button.bg-blue-500 {
  background-color: #0066cc;
  color: white;
}

button.bg-blue-500:hover {
  background-color: #004080;
}

button.bg-green-500 {
  background-color: #28a745;
  color: white;
}

button.bg-green-500:hover {
  background-color: #1e7e34;
}

button.bg-gray-400 {
  background-color: #6c757d;
  color: white;
}

button.bg-gray-400:hover {
  background-color: #5a6268;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
}

input[type="text"],
select,
textarea {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  transition: border 0.2s, box-shadow 0.2s;
}

input[type="text"]:focus,
select:focus,
textarea:focus {
  border-color: #0066cc;
  box-shadow: 0 0 4px rgba(0, 102, 204, 0.4);
  outline: none;
}

label {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 4px;
  display: block;
  color: #004080;
}

input[type="radio"] {
  margin-right: 4px;
  accent-color: #0066cc;
}

p {
  font-weight: 500;
  margin-bottom: 4px;
  color: #004080;
}

.flex > button {
  min-width: 120px;
}
</style>
