<template>
  <main class="flex-1 p-6 bg-white overflow-y-auto">
    <div class="mb-6">
      <label class="mr-2 font-medium text-blue-800">Opción de reportes:</label>
      <select v-model="selectedOption" class="border p-2 rounded min-w-[200px]">
        <option>Reporte de Ventas</option>
        <option>Reporte de Clientes</option>
        <option>Reporte de Productos</option>
        <option>Reporte de Inventario</option>
      </select>
    </div>

    <div class="border rounded-lg shadow-sm">
      <div class="flex border-b bg-gray-50">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = index"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTab === index
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-blue-600'
          ]"
        >
          {{ tab.nombre }}
        </button>
      </div>

      <div class="p-4">
        <table class="w-full text-sm border-collapse">
          <thead class="bg-gray-200">
            <tr>
              <th class="border px-3 py-2 text-center">Nombre</th>
              <th class="border px-3 py-2 text-center">Descripción</th>
              <th class="border px-3 py-2 text-center">Valor</th>
              <th class="border px-3 py-2 text-center">Fecha</th>
              <th class="border px-3 py-2 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, rowIndex) in datos[claveReporte][activeTab]"
              :key="rowIndex"
              class="hover:bg-gray-50"
            >
              <td class="border px-3 py-2 text-center">{{ item.nombre }}</td>
              <td class="border px-3 py-2 text-center">{{ item.descripcion }}</td>
              <td class="border px-3 py-2 text-center">{{ item.valor }}</td>
              <td class="border px-3 py-2 text-center">{{ item.fecha }}</td>
              <td class="border px-3 py-2 text-center">
                <button
                  @click="eliminarFila(rowIndex)"
                  class="text-red-600 hover:underline"
                >
                  Eliminar
                </button>
              </td>
            </tr>
            <tr v-if="datos[claveReporte][activeTab].length === 0">
              <td colspan="5" class="text-center text-gray-500 py-3">
                Sin datos en esta pestaña
              </td>
            </tr>
          </tbody>
        </table>

        <div class="mt-4 border-t pt-4">
          <h3 class="font-medium mb-3 text-blue-800">
            Agregar nuevo dato a {{ tabs[activeTab].nombre }}
          </h3>
          <div class="grid grid-cols-4 gap-3 mb-4">
            <input
              v-model="nuevo.nombre"
              placeholder="Nombre"
              class="border p-2 rounded"
            />
            <input
              v-model="nuevo.descripcion"
              placeholder="Descripción"
              class="border p-2 rounded"
            />
            <input
              v-model="nuevo.valor"
              placeholder="Valor"
              class="border p-2 rounded"
            />
            <input
              type="date"
              v-model="nuevo.fecha"
              class="border p-2 rounded"
            />
          </div>
          <button
            @click="agregarDato"
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ContentReporte",
  data() {
    return {
      selectedOption: "Reporte de Ventas",
      activeTab: 0,
      tabs: [
        { nombre: "Ventas del Día" },
        { nombre: "Clientes Registrados" },
        { nombre: "Productos Vendidos" },
      ],
      nuevo: { nombre: "", descripcion: "", valor: "", fecha: "" },
      datos: JSON.parse(localStorage.getItem("reportes")) || {
        ventas: [[], [], []],
        clientes: [[], [], []],
        productos: [[], [], []],
        inventario: [[], [], []],
      },
    };
  },
  computed: {
    claveReporte() {
      switch (this.selectedOption) {
        case "Reporte de Ventas":
          return "ventas";
        case "Reporte de Clientes":
          return "clientes";
        case "Reporte de Productos":
          return "productos";
        case "Reporte de Inventario":
          return "inventario";
        default:
          return "ventas";
      }
    },
  },
  methods: {
    guardarLocal() {
      localStorage.setItem("reportes", JSON.stringify(this.datos));
    },
    agregarDato() {
      if (
        !this.nuevo.nombre ||
        !this.nuevo.descripcion ||
        !this.nuevo.valor ||
        !this.nuevo.fecha
      ) {
        alert("Por favor completa todos los campos");
        return;
      }
      this.datos[this.claveReporte][this.activeTab].push({ ...this.nuevo });
      this.nuevo = { nombre: "", descripcion: "", valor: "", fecha: "" };
      this.guardarLocal();
    },
    eliminarFila(index) {
      this.datos[this.claveReporte][this.activeTab].splice(index, 1);
      this.guardarLocal();
    },
  },
};
</script>

<style scoped>
main {
  padding: 80px 24px 24px;
  background-color: #ffffff;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

table {
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;
}

table th {
  background-color: #f4f6f8;
  font-weight: 600;
  color: #004080;
}

table th,
table td {
  border: 1px solid #ddd;
  text-align: center;
}
</style>
