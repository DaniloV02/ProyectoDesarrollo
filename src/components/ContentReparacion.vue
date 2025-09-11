<template>
  <main class="flex-1 p-6 bg-white overflow-y-auto">
    <div class="mb-4">
      <input
        type="text"
        placeholder="Buscar cliente"
        class="border px-3 py-2 rounded w-1/3"
      />
    </div>

    <div class="border rounded mb-6">
      <table class="w-full text-sm border-collapse">
        <thead class="bg-gray-200">
          <tr>
            <th class="border px-2 py-1">Producto 1</th>
            <th class="border px-2 py-1">Producto 2</th>
            <th class="border px-2 py-1">Producto 3</th>
            <th class="border px-2 py-1">Producto 4</th>
            <th class="border px-2 py-1">Producto 5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-2 py-1">-</td>
            <td class="border px-2 py-1">-</td>
            <td class="border px-2 py-1">-</td>
            <td class="border px-2 py-1">-</td>
            <td class="border px-2 py-1">-</td>
          </tr>
        </tbody>
      </table>
      <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Agregar cliente
      </button>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <label>Modelo del teléfono</label>
        <input type="text" class="w-full border p-2 rounded mb-2" />

        <label>Marca del teléfono</label>
        <input type="text" class="w-full border p-2 rounded mb-2" />

        <label>Tipo de servicio</label>
        <input type="text" class="w-full border p-2 rounded mb-2" />

        <label>Método de Pago</label>
        <select class="w-full border p-2 rounded mb-2">
          <option>Efectivo</option>
          <option>Tarjeta</option>
          <option>Transferencia</option>
        </select>

        <label>Repuesto</label>
        <input type="text" class="w-full border p-2 rounded mb-2" />
      </div>

      <div>
        <p>¿Trae forro?</p>
        <label><input type="radio" name="forro" /> Sí</label>
        <label><input type="radio" name="forro" /> No</label>

        <p class="mt-2">¿Trae SIM?</p>
        <label><input type="radio" name="sim" /> Sí</label>
        <label><input type="radio" name="sim" /> No</label>

        <label class="block mt-4">Cobro (PV)</label>
        <input type="text" class="w-full border p-2 rounded mb-2" />

        <label>Descripción o información importante</label>
        <textarea class="w-full border p-2 rounded mb-2"></textarea>
      </div>
    </div>

    <div class="flex space-x-4 mt-4">
      <button class="px-4 py-2 bg-green-500 text-white rounded">
        Enviar Solicitud
      </button>
      <button class="px-4 py-2 bg-gray-400 text-white rounded">
        Limpiar Solicitud
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: "ContentReparacion"
}
</script>

<style scoped>
main {
  padding: 80px 24px 24px; 
  background-color: #ffffff; 
  font-family: 'Segoe UI', sans-serif;
  color: #333;

  max-width: 1000px;   
  margin: 0 auto;      
  border-radius: 8px;  
  box-shadow: 0 2px 6px rgba(0,0,0,0.1); 
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

/* Botones */
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

/* Colores de botones */
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
