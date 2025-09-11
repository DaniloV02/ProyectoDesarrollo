<template>
  <aside class="sidebar">
    <nav>
      <ul class="menu">
        <li>
          <router-link to="/reparaciones">Reparaciones</router-link>
        </li>
        <li>
          <router-link to="/reportes">Reportes</router-link>
        </li>
        <li>
          <router-link to="/accesorios">Accesorios</router-link>
        </li>
        <li>
          <p class="menu-title">Agregar</p>
          <ul class="submenu">
            <li><router-link to="/productos">Producto</router-link></li>
            <li><router-link to="/clientes">Cliente</router-link></li>
            <li><router-link to="/proveedor">Proveedor</router-link></li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "SidebarAccesorios"
}
</script>

<style scoped>
.sidebar {
  width: 220px;
  background: #1c1c1c;
  color: white;
  padding: 20px 15px;
  position: fixed;
  top: 60px; /* altura del header */
  left: 0;
  height: calc(100vh - 60px);
  box-shadow: 2px 0 6px rgba(0,0,0,0.3);
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  margin-bottom: 6px;
}

.menu a {
  display: block;
  padding: 12px 15px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  color: white;
  text-decoration: none;
}

.menu a:hover {
  background: #2d2d2d;
  transform: translateX(3px);
}

.menu-title {
  font-weight: bold;
  color: #ffcc00;
  margin: 12px 0 6px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.submenu {
  list-style: none;
  padding-left: 15px;
  margin: 5px 0 0;
}

.submenu a {
  font-size: 14px;
  color: #ccc;
  padding: 8px;
  border-radius: 4px;
  transition: color 0.3s, background 0.3s;
  display: block;
}

.submenu a:hover {
  color: #ffcc00;
  background: #333;
}
</style>
