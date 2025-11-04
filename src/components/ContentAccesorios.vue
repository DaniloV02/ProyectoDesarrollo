<template>
  <main class="flex-1 p-6 bg-white overflow-y-auto">
    <section class="flex flex-wrap items-center gap-4 mb-6">
      <label class="font-medium text-blue-800">Tipo de producto:</label>
      <select v-model="filtro" class="border p-2 rounded min-w-[160px]">
        <option value="">Todos</option>
        <option>Accesorios</option>
        <option>Celulares</option>
        <option>Repuestos</option>
      </select>

      <div class="flex items-center gap-2 flex-1">
        <input
          v-model="busqueda"
          type="text"
          placeholder="Buscar producto"
          class="flex-1 border px-3 py-2 rounded"
        />
        <button @click="buscarProducto" class="px-4 py-2 bg-blue-500 text-white rounded">
          Buscar
        </button>
      </div>
    </section>


    <section class="border rounded-lg shadow-sm mb-6 overflow-x-auto">
      <h3 class="font-semibold text-blue-700 px-3 py-2 border-b">
        Lista de Productos
      </h3>
      <table class="w-full text-sm border-collapse">
        <thead class="bg-gray-100">
          <tr>
            <th class="border px-3 py-2">Tipo</th>
            <th class="border px-3 py-2">Producto</th>
            <th class="border px-3 py-2">Cantidad</th>
            <th class="border px-3 py-2">Precio</th>
            <th class="border px-3 py-2">Total</th>
            <th class="border px-3 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(p, index) in productosFiltrados"
            :key="index"
            class="hover:bg-gray-50"
          >
            <td class="border px-3 py-2">{{ p.tipo }}</td>
            <td class="border px-3 py-2">{{ p.nombre }}</td>
            <td class="border px-3 py-2">{{ p.cantidad }}</td>
            <td class="border px-3 py-2">${{ p.precio.toLocaleString() }}</td>
            <td class="border px-3 py-2">${{ p.total.toLocaleString() }}</td>
            <td class="border px-3 py-2">
              <button class="text-blue-600" @click="editarProducto(index)">✏️</button>
              <button class="text-red-500 ml-2" @click="eliminarProducto(index)">🗑️</button>
            </td>
          </tr>
          <tr v-if="productosFiltrados.length === 0">
            <td colspan="6" class="text-center py-3 text-gray-500">
              No hay productos registrados.
            </td>
          </tr>
        </tbody>
      </table>
    </section>

   
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <label class="block font-medium text-blue-700 mb-1">Tipo de producto:</label>
        <input
          v-model="producto.tipo"
          type="text"
          placeholder="Ej. Accesorio"
          class="w-full md:w-2/3 border p-2 rounded mb-3"
        />

        <label class="block font-medium text-blue-700 mb-1">Producto:</label>
        <input
          v-model="producto.nombre"
          type="text"
          placeholder="Ej. Lámpara LED"
          class="w-full md:w-2/3 border p-2 rounded mb-3"
        />

        <label class="block font-medium text-blue-700 mb-1">Cantidad:</label>
        <input
          v-model.number="producto.cantidad"
          type="number"
          min="1"
          placeholder="Ej. 2"
          class="w-full md:w-2/3 border p-2 rounded mb-3"
        />

        <label class="block font-medium text-blue-700 mb-1">Precio:</label>
        <input
          v-model.number="producto.precio"
          type="number"
          min="0"
          step="0.01"
          placeholder="Ej. 50.00"
          class="w-full md:w-2/3 border p-2 rounded"
        />
      </div>

      <div class="flex flex-col justify-center">
        <p class="font-semibold text-lg text-gray-700 mb-2">
          Total: <span class="text-green-600">${{ totalCalculado.toLocaleString() }}</span>
        </p>
        <button
          @click="guardarProducto"
          class="px-6 py-3 bg-green-500 text-white rounded shadow hover:bg-green-600"
        >
          {{ editando ? "Actualizar Producto" : "Registrar Venta" }}
        </button>
        <button
          @click="limpiarFormulario"
          class="mt-2 px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          Limpiar
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";

const producto = ref({
  tipo: "",
  nombre: "",
  cantidad: 0,
  precio: 0,
});

const productos = ref(JSON.parse(localStorage.getItem("ventas")) || []);
const filtro = ref("");
const busqueda = ref("");
const editando = ref(false);
const indiceEdicion = ref(null);

const totalCalculado = computed(() => producto.value.cantidad * producto.value.precio);

const productosFiltrados = computed(() => {
  let lista = productos.value;
  if (filtro.value) lista = lista.filter((p) => p.tipo === filtro.value);
  if (busqueda.value)
    lista = lista.filter((p) =>
      p.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
    );
  return lista;
});

watch(
  productos,
  (nuevos) => {
    localStorage.setItem("ventas", JSON.stringify(nuevos));
  },
  { deep: true }
);


const guardarProducto = () => {
  if (!producto.value.nombre || producto.value.cantidad <= 0 || producto.value.precio <= 0) {
    alert("⚠️ Por favor completa todos los campos correctamente.");
    return;
  }

  const existenteIndex = productos.value.findIndex(
    (p) => p.nombre.toLowerCase() === producto.value.nombre.toLowerCase()
  );

  if (editando.value) {
    productos.value[indiceEdicion.value] = {
      ...producto.value,
      total: producto.value.cantidad * producto.value.precio,
    };
    alert("✅ Producto actualizado correctamente.");
    editando.value = false;
  } else {
    if (existenteIndex !== -1) {
      const existente = productos.value[existenteIndex];

      if (existente.cantidad < producto.value.cantidad) {
        alert("❌ No hay suficiente stock para esta venta.");
        return;
      }

      
      existente.cantidad -= producto.value.cantidad;
      existente.total = existente.cantidad * existente.precio;

      alert(`🛒 Venta registrada. Quedan ${existente.cantidad} unidades en stock.`);
    } else {

      const nuevo = {
        tipo: producto.value.tipo,
        nombre: producto.value.nombre,
        cantidad: producto.value.cantidad,
        precio: producto.value.precio,
        total: producto.value.cantidad * producto.value.precio,
      };
      productos.value.push(nuevo);
      alert("✅ Producto agregado al inventario.");
    }
  }

  limpiarFormulario();
};

const limpiarFormulario = () => {
  producto.value = { tipo: "", nombre: "", cantidad: 0, precio: 0 };
  editando.value = false;
  indiceEdicion.value = null;
};

const editarProducto = (index) => {
  producto.value = { ...productos.value[index] };
  editando.value = true;
  indiceEdicion.value = index;
};

const eliminarProducto = (index) => {
  if (confirm("¿Seguro que deseas eliminar este producto?")) {
    productos.value.splice(index, 1);
    alert("🗑️ Producto eliminado correctamente.");
  }
};

const buscarProducto = () => {
  if (!busqueda.value.trim()) {
    alert("Ingrese un término de búsqueda.");
  }
};

onMounted(() => {
  const data = localStorage.getItem("ventas");
  if (data) productos.value = JSON.parse(data);
});
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
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
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
  padding: 8px;
}

button {
  font-size: 14px;
  transition: background-color 0.2s, transform 0.2s;
}

button:hover {
  transform: scale(1.03);
}
</style>
