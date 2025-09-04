<template>
  <main class="content-productos">
    <h2 class="title">Registro de Productos</h2>

    <div class="form-productos">
      <div class="form-group">
        <label for="tipoProducto">Tipo de Producto:</label>
        <input type="text" id="tipoProducto" placeholder="Ingrese tipo de producto" />
      </div>

      <div class="form-group">
        <label for="producto">Producto:</label>
        <input type="text" id="producto" placeholder="Ingrese nombre del producto" />
      </div>

      <div class="form-group">
        <label for="descripcion">Descripción:</label>
        <input type="text" id="descripcion" placeholder="Ingrese descripción" />
      </div>

      <div class="form-group">
        <label for="cantidad">Cantidad:</label>
        <input type="number" id="cantidad" placeholder="Ingrese cantidad" />
      </div>

      <div class="form-group">
        <label for="marca">Marca:</label>
        <input type="text" id="marca" placeholder="Ingrese marca" />
      </div>

      <div class="form-group">
        <label for="modelo">Modelo:</label>
        <input type="text" id="modelo" placeholder="Ingrese modelo" />
      </div>

      <div class="form-group">
        <label for="proveedor">Proveedor:</label>
        <input type="text" id="proveedor" placeholder="Ingrese proveedor" />
      </div>

      <div class="form-group">
        <label for="precioCompraUnidad">Precio Compra xUnd:</label>
        <input type="number" id="precioCompraUnidad" placeholder="Precio compra por unidad" />
      </div>

      <div class="form-group">
        <label for="totalCompra">Total Compra:</label>
        <input type="number" id="totalCompra" placeholder="Total compra" />
      </div>

      <div class="form-group">
        <label for="precioVentaUnidad">Precio Venta xUnd:</label>
        <input type="number" id="precioVentaUnidad" placeholder="Precio venta por unidad" />
      </div>

      <div class="form-group">
        <label for="totalVenta">Total Venta:</label>
        <input type="number" id="totalVenta" placeholder="Total venta" />
      </div>

      <div class="buttons">
        <button id="agregar">Agregar</button>
        <button id="limpiar">Limpiar Datos</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ContentProductos"
}
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

.form-productos {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
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
</style>
