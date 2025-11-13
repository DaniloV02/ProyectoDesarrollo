<template>
  <main class="flex-1 p-6 bg-white overflow-y-auto">
    <div class="border rounded-lg shadow-sm">
      <!-- Tabs -->
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

      <!-- Tabla -->
      <div class="p-4">
        <table class="w-full text-sm border-collapse">
          <thead class="bg-gray-200">
            <tr>
              <th class="border px-3 py-2 text-center">Nombre</th>
              <th class="border px-3 py-2 text-center">Descripción</th>
              <th class="border px-3 py-2 text-center">Cantidad</th>
              <th class="border px-3 py-2 text-center">Precio Unitario</th>
              <th class="border px-3 py-2 text-center">Valor Total</th>
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
              <td class="border px-3 py-2 text-center">{{ item.cantidad }}</td>
              <td class="border px-3 py-2 text-center">{{ formatoPesos(item.precio) }}</td>
              <td class="border px-3 py-2 text-center font-semibold text-blue-800">
                {{ formatoPesos(item.valor) }}
              </td>
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
              <td colspan="7" class="text-center text-gray-500 py-3">
                Sin datos en esta pestaña
              </td>
            </tr>
            <tr v-if="datos[claveReporte][activeTab].length > 0" class="bg-blue-50 font-semibold">
              <td colspan="4" class="border text-right pr-4 text-blue-900">TOTAL GENERAL:</td>
              <td class="border text-center text-blue-900">
                {{ formatoPesos(totalGeneral) }}
              </td>
              <td colspan="2" class="border"></td>
            </tr>
          </tbody>
        </table>

        <!-- Formulario -->
        <div class="mt-4 border-t pt-4">
          <h3 class="font-medium mb-3 text-blue-800">
            Agregar nuevo dato a {{ tabs[activeTab].nombre }}
          </h3>
          <div class="grid grid-cols-6 gap-3 mb-4">
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
              v-model.number="nuevo.cantidad"
              type="number"
              placeholder="Cantidad"
              class="border p-2 rounded"
            />
            <input
              v-model.number="nuevo.precio"
              type="number"
              placeholder="Precio Unitario"
              class="border p-2 rounded"
            />
            <input
              type="date"
              v-model="nuevo.fecha"
              class="border p-2 rounded"
            />
            <div class="flex items-center">
              <span class="text-blue-800 font-medium">
                Total: {{ formatoPesos(nuevo.cantidad * nuevo.precio || 0) }}
              </span>
            </div>
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
      nuevo: { nombre: "", descripcion: "", cantidad: 0, precio: 0, valor: 0, fecha: "" },
      datos: {
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
    totalGeneral() {
      return this.datos[this.claveReporte][this.activeTab].reduce(
        (sum, item) => sum + item.valor,
        0
      );
    },
  },
  mounted() {
    const guardado = localStorage.getItem("reportes");
    if (guardado) {
      this.datos = JSON.parse(guardado);
    }
  },
  methods: {
    formatoPesos(valor) {
      return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      }).format(valor);
    },
    guardarLocal() {
      localStorage.setItem("reportes", JSON.stringify(this.datos));
    },
    agregarDato() {
      if (
        !this.nuevo.nombre ||
        !this.nuevo.descripcion ||
        !this.nuevo.cantidad ||
        !this.nuevo.precio ||
        !this.nuevo.fecha
      ) {
        alert("Por favor completa todos los campos");
        return;
      }

      const total = this.nuevo.cantidad * this.nuevo.precio;

      this.datos[this.claveReporte][this.activeTab].push({
        nombre: this.nuevo.nombre,
        descripcion: this.nuevo.descripcion,
        cantidad: this.nuevo.cantidad,
        precio: this.nuevo.precio,
        valor: total,
        fecha: this.nuevo.fecha,
      });

      this.nuevo = { nombre: "", descripcion: "", cantidad: 0, precio: 0, valor: 0, fecha: "" };
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
