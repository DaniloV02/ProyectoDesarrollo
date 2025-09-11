<template>
  <main class="flex-1 p-6 bg-white overflow-y-auto">
    <!-- SELECT DE OPCIONES -->
    <div class="mb-6">
      <label class="mr-2 font-medium text-blue-800">Opción de reportes:</label>
      <select class="border p-2 rounded min-w-[200px]">
        <option>Reporte de Ventas</option>
        <option>Reporte de Clientes</option>
        <option>Reporte de Productos</option>
        <option>Reporte de Inventario</option>
      </select>
    </div>

    <!-- CONTENEDOR DE TABS -->
    <div class="border rounded-lg shadow-sm">
      <!-- PESTAÑAS -->
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
          {{ tab }}
        </button>
      </div>

      <!-- TABLA DE CADA PESTAÑA -->
      <div class="p-4">
        <table class="w-full text-sm border-collapse">
          <thead class="bg-gray-200">
            <tr>
              <th
                v-for="col in 5"
                :key="col"
                class="border px-3 py-2 text-center"
              >
                Pestaña {{ activeTab + 1 }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in 5" :key="row" class="hover:bg-gray-50">
              <td
                v-for="col in 5"
                :key="col"
                class="border px-3 py-2 text-center"
              >
                S
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ContentReporte",
  data() {
    return {
      tabs: ["Pestaña 1", "Pestaña 2", "Pestaña 3"],
      activeTab: 0,
    };
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

/* Tablas */
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
