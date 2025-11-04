<template>
  <main class="content-productos">
    <h2 class="title">Registro de Productos</h2>

    <div class="form-productos">
      <div class="form-group">
        <label for="tipoProducto">Tipo de Producto:</label>
        <input v-model="producto.tipoProducto" type="text" id="tipoProducto" placeholder="Ingrese tipo de producto" />
      </div>

      <div class="form-group">
        <label for="producto">Producto:</label>
        <input v-model="producto.nombre" type="text" id="producto" placeholder="Ingrese nombre del producto" />
      </div>

      <div class="form-group">
        <label for="descripcion">Descripción:</label>
        <input v-model="producto.descripcion" type="text" id="descripcion" placeholder="Ingrese descripción" />
      </div>

      <div class="form-group">
        <label for="cantidad">Cantidad:</label>
        <input v-model="producto.cantidad" type="number" id="cantidad" placeholder="Ingrese cantidad" />
      </div>

      <div class="form-group">
        <label for="marca">Marca:</label>
        <input v-model="producto.marca" type="text" id="marca" placeholder="Ingrese marca" />
      </div>

      <div class="form-group">
        <label for="modelo">Modelo:</label>
        <input v-model="producto.modelo" type="text" id="modelo" placeholder="Ingrese modelo" />
      </div>

      <div class="form-group">
        <label for="proveedor">Proveedor:</label>
        <input v-model="producto.proveedor" type="text" id="proveedor" placeholder="Ingrese proveedor" />
      </div>

      <div class="form-group">
        <label for="precioCompraUnidad">Precio Compra xUnd:</label>
        <input v-model="producto.precioCompraUnidad" type="number" id="precioCompraUnidad" placeholder="Precio compra por unidad" />
      </div>

      <div class="form-group">
        <label for="totalCompra">Total Compra:</label>
        <input v-model="producto.totalCompra" type="number" id="totalCompra" placeholder="Total compra" />
      </div>

      <div class="form-group">
        <label for="precioVentaUnidad">Precio Venta xUnd:</label>
        <input v-model="producto.precioVentaUnidad" type="number" id="precioVentaUnidad" placeholder="Precio venta por unidad" />
      </div>

      <div class="form-group">
        <label for="totalVenta">Total Venta:</label>
        <input v-model="producto.totalVenta" type="number" id="totalVenta" placeholder="Total venta" />
      </div>

      <div class="buttons">
        <button @click="guardarProducto">{{ editando ? "Actualizar" : "Agregar" }}</button>
        <button @click="limpiarDatos">Limpiar Datos</button>
      </div>
    </div>

    <!-- 📋 Tabla de productos -->
    <div v-if="productos.length > 0" class="tabla-productos">
      <h3 class="subtitle">📋 Productos Registrados</h3>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Producto</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Proveedor</th>
            <th>Precio Compra</th>
            <th>Total Compra</th>
            <th>Precio Venta</th>
            <th>Total Venta</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, index) in productos" :key="index">
            <td>{{ p.tipoProducto }}</td>
            <td>{{ p.nombre }}</td>
            <td>{{ p.descripcion }}</td>
            <td>{{ p.cantidad }}</td>
            <td>{{ p.marca }}</td>
            <td>{{ p.modelo }}</td>
            <td>{{ p.proveedor }}</td>
            <td>{{ p.precioCompraUnidad }}</td>
            <td>{{ p.totalCompra }}</td>
            <td>{{ p.precioVentaUnidad }}</td>
            <td>{{ p.totalVenta }}</td>
            <td>
              <button class="btn-editar" @click="editarProducto(index)">✏️</button>
              <button class="btn-eliminar" @click="eliminarProducto(index)">🗑️</button>
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
  name: "ContentProductos",
  setup() {
    const producto = ref({
      tipoProducto: "",
      nombre: "",
      descripcion: "",
      cantidad: "",
      marca: "",
      modelo: "",
      proveedor: "",
      precioCompraUnidad: "",
      totalCompra: "",
      precioVentaUnidad: "",
      totalVenta: "",
    });

    const productos = ref(JSON.parse(localStorage.getItem("productos")) || []);
    const editando = ref(false);
    const indiceEdicion = ref(null);

    // 🔄 Guarda en localStorage automáticamente
    watch(
      productos,
      (nuevos) => {
        localStorage.setItem("productos", JSON.stringify(nuevos));
      },
      { deep: true }
    );

    const guardarProducto = () => {
      if (!producto.value.nombre.trim() || !producto.value.modelo.trim()) {
        alert("⚠️ Por favor completa al menos el nombre y el modelo del producto.");
        return;
      }

      // 🚫 Evitar duplicados por nombre o modelo
      const duplicado = productos.value.some(
        (p, i) =>
          (p.nombre === producto.value.nombre || p.modelo === producto.value.modelo) &&
          i !== indiceEdicion.value
      );

      if (duplicado) {
        alert("🚫 Este producto ya está registrado (nombre o modelo repetido).");
        return;
      }

      if (editando.value) {
        productos.value[indiceEdicion.value] = { ...producto.value };
        alert("✅ Producto actualizado correctamente.");
        editando.value = false;
      } else {
        productos.value.push({ ...producto.value });
        alert("✅ Producto agregado correctamente.");
      }

      limpiarDatos();
    };

    const limpiarDatos = () => {
      for (const key in producto.value) producto.value[key] = "";
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

    onMounted(() => {
      const data = localStorage.getItem("productos");
      if (data) productos.value = JSON.parse(data);
    });

    return {
      producto,
      productos,
      guardarProducto,
      limpiarDatos,
      editarProducto,
      eliminarProducto,
      editando,
    };
  },
};
</script>

<style scoped>
.content-productos {
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

.form-productos {
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

.tabla-productos {
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
  font-size: 13.5px;
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
