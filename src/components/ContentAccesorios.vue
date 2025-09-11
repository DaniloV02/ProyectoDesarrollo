<template>
  <main class="flex-1 p-6 bg-white overflow-y-auto">
    <!-- FILTRO DE PRODUCTOS -->
    <section class="flex flex-wrap items-center gap-4 mb-6">
      <label class="font-medium text-blue-800">Tipo de producto:</label>
      <select class="border p-2 rounded min-w-[160px]">
        <option>Accesorios</option>
        <option>Celulares</option>
        <option>Repuestos</option>
      </select>

      <div class="flex items-center gap-2 flex-1">
        <input
          type="text"
          placeholder="Buscar producto"
          class="flex-1 border px-3 py-2 rounded"
        />
        <button class="px-4 py-2 bg-blue-500 text-white rounded">
          Buscar
        </button>
      </div>
    </section>

    <!-- TABLA PRODUCTOS -->
    <section class="border rounded-lg shadow-sm mb-6 overflow-x-auto">
      <h3 class="font-semibold text-blue-700 px-3 py-2 border-b">
        Lista de Accesorios
      </h3>
      <table class="w-full text-sm border-collapse">
        <thead class="bg-gray-100">
          <tr>
            <th class="border px-3 py-2">Producto 1</th>
            <th class="border px-3 py-2">Producto 2</th>
            <th class="border px-3 py-2">Producto 3</th>
            <th class="border px-3 py-2">Producto 4</th>
            <th class="border px-3 py-2">Producto 5</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-gray-50">
            <td class="border px-3 py-2">-</td>
            <td class="border px-3 py-2">-</td>
            <td class="border px-3 py-2">-</td>
            <td class="border px-3 py-2">-</td>
            <td class="border px-3 py-2">-</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- FORMULARIO DE VENTA -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <label class="block font-medium text-blue-700 mb-1">Cantidad:</label>
        <input
          type="number"
          min="1"
          placeholder="Ej. 2"
          class="w-full md:w-2/3 border p-2 rounded mb-3"
        />

        <label class="block font-medium text-blue-700 mb-1">Precio:</label>
        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="Ej. 50.00"
          class="w-full md:w-2/3 border p-2 rounded"
        />
      </div>

      <div class="flex flex-col justify-center">
        <p class="font-semibold text-lg text-gray-700 mb-2">
          Total: <span class="text-green-600">$0.00</span>
        </p>
        <button class="px-6 py-3 bg-green-500 text-white rounded shadow hover:bg-green-600">
          Registrar Venta
        </button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "ContentAccesorios"
}
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

/* Tabla */
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


button {
  font-size: 14px;
  transition: background-color 0.2s, transform 0.2s;
}

button:hover {
  transform: scale(1.03);
}
</style>
