<template>
  <main class="flex-1 p-8 bg-gray-100 min-h-screen">
    <!-- BUSCADOR -->
    <div class="mb-8 flex justify-between items-center flex-wrap gap-3">
      <div class="relative w-full md:w-1/3">
        <input
          type="text"
          placeholder="Buscar proveedor..."
          class="w-full border px-4 py-2 pl-10 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <span class="absolute left-3 top-2.5 text-gray-400">🔍</span>
      </div>
      <button
        class="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 active:scale-95 transition"
      >
        Buscar
      </button>
    </div>

    <!-- TABLA -->
    <div class="bg-white p-6 rounded-xl shadow mb-10">
      <h2 class="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
        📋 Lista de Proveedores
      </h2>
      <div class="overflow-x-auto rounded-lg border">
        <table class="w-full text-sm border-collapse">
          <thead class="bg-blue-50 text-blue-900">
            <tr>
              <th class="px-4 py-3 text-left">Proveedor</th>
              <th class="px-4 py-3 text-left">Razón Social</th>
              <th class="px-4 py-3 text-left">Correo</th>
              <th class="px-4 py-3 text-left">Documento</th>
              <th class="px-4 py-3 text-left">Teléfono</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr class="hover:bg-blue-50 transition">
              <td class="px-4 py-3">-</td>
              <td class="px-4 py-3">-</td>
              <td class="px-4 py-3">-</td>
              <td class="px-4 py-3">-</td>
              <td class="px-4 py-3">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- FORMULARIO -->
    <div class="bg-white p-6 rounded-xl shadow mb-10">
      <h2 class="text-xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
        📝 Registro de Proveedor
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(field, index) in fields" :key="index">
          <label class="block text-sm font-medium text-gray-600 mb-1">
            {{ field.label }}
          </label>
          <input
            :type="field.type"
            class="w-full border px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
      </div>
    </div>

    <!-- BOTONES -->
    <div class="flex flex-wrap gap-4">
      <button
        class="flex items-center gap-2 px-6 py-2 bg-green-500 text-white rounded-lg font-medium shadow hover:bg-green-600 active:scale-95 transition"
      >
        ➕ Agregar
      </button>
      <button
        class="flex items-center gap-2 px-6 py-2 bg-yellow-500 text-white rounded-lg font-medium shadow hover:bg-yellow-600 active:scale-95 transition"
      >
        ✏️ Editar
      </button>
      <button
        class="flex items-center gap-2 px-6 py-2 bg-red-500 text-white rounded-lg font-medium shadow hover:bg-red-600 active:scale-95 transition"
      >
        🗑️ Eliminar
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: "ContentProveedor",
  data() {
    return {
      fields: [
        { label: "Proveedor", type: "text" },
        { label: "Razón Social", type: "text" },
        { label: "Correo", type: "email" },
        { label: "Documento", type: "text" },
        { label: "Tipo Documento", type: "text" },
        { label: "Dirección", type: "text" },
        { label: "Teléfono", type: "text" },
      ],
    };
  },
};
</script>

<style scoped>
main {
  padding: 80px 24px 24px;
  background-color: #ffffff;
  font-family: "Segoe UI", sans-serif;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
}
</style>

