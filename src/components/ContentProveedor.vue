<template>
  <main class="p-6 bg-gray-100 min-h-screen">
    <!-- 🔍 BUSCADOR -->
    <div class="mb-6 flex justify-between items-center flex-wrap gap-3">
      <div class="flex items-center gap-2 w-full md:w-1/3">
        <InputText
          v-model="busqueda"
          placeholder="Buscar proveedor..."
          class="w-full"
        />
        <AppButton
          label="Buscar"
          icon="pi pi-search"
          severity="info"
          @click="buscarProveedor"
        />
      </div>
    </div>

    <!-- 📋 TABLA DE PROVEEDORES -->
    <AppCard class="mb-8">
      <template #title>
        <h2 class="text-lg font-semibold text-gray-700 flex items-center gap-2">
          <i class="pi pi-list"></i> Lista de Proveedores
        </h2>
      </template>

      <template #content>
        <DataTable
          :value="proveedores"
          selectionMode="single"
          v-model:selection="proveedorSeleccionado"
          dataKey="documento"
          stripedRows
          responsiveLayout="scroll"
          class="p-datatable-sm"
        >
          <Column selectionMode="single" headerStyle="width:3rem"></Column>
          <Column field="nombre" header="Proveedor"></Column>
          <Column field="razon" header="Razón Social"></Column>
          <Column field="correo" header="Correo"></Column>
          <Column field="documento" header="Documento"></Column>
          <Column field="telefono" header="Teléfono"></Column>
        </DataTable>
      </template>
    </AppCard>

    <!-- 📝 FORMULARIO DE REGISTRO -->
    <AppCard class="mb-8">
      <template #title>
        <h2 class="text-lg font-semibold text-gray-700 flex items-center gap-2">
          <i class="pi pi-pencil"></i> Registro de Proveedor
        </h2>
      </template>

      <template #content>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            v-for="(field, index) in fields"
            :key="index"
            class="flex flex-col"
          >
            <label class="text-sm font-medium text-gray-600 mb-1">
              {{ field.label }}
            </label>
            <InputText
              v-model="form[field.model]"
              :type="field.type"
              class="w-full"
            />
          </div>
        </div>
      </template>
    </AppCard>

    <!-- ⚙️ BOTONES -->
    <div class="flex flex-wrap gap-3">
      <AppButton
        label="Agregar"
        icon="pi pi-plus"
        severity="success"
        @click="agregarProveedor"
      />
      <AppButton
        label="Editar"
        icon="pi pi-pencil"
        severity="warning"
        @click="editarProveedor"
      />
      <AppButton
        label="Eliminar"
        icon="pi pi-trash"
        severity="danger"
        @click="eliminarProveedor"
      />
      <AppButton
        label="Limpiar"
        icon="pi pi-refresh"
        severity="secondary"
        @click="limpiarFormulario"
      />
    </div>
  </main>
</template>

<script>
import { ref, watch } from "vue";

// ✅ Importar PrimeVue components
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Card from "primevue/card";

export default {
  name: "ContentProveedor",
  components: {
    InputText,
    AppButton: Button, // nombres multi-word para ESLint
    DataTable,
    Column,
    AppCard: Card,
  },
  setup() {
    const busqueda = ref("");
    const proveedorSeleccionado = ref(null);
    // editingKey guarda el documento original mientras editas (útil si cambias documento)
    const editingKey = ref(null);

    const proveedores = ref([
      {
        nombre: "Proveedor 1",
        razon: "Empresa ABC",
        correo: "correo@abc.com",
        documento: "123456789",
        telefono: "3001234567",
      },
      {
        nombre: "Proveedor 2",
        razon: "Empresa XYZ",
        correo: "contacto@xyz.com",
        documento: "987654321",
        telefono: "3019876543",
      },
    ]);

    const form = ref({
      nombre: "",
      razon: "",
      correo: "",
      documento: "",
      tipoDocumento: "",
      direccion: "",
      telefono: "",
    });

    const fields = [
      { label: "Proveedor", model: "nombre", type: "text" },
      { label: "Razón Social", model: "razon", type: "text" },
      { label: "Correo", model: "correo", type: "email" },
      { label: "Documento", model: "documento", type: "text" },
      { label: "Tipo Documento", model: "tipoDocumento", type: "text" },
      { label: "Dirección", model: "direccion", type: "text" },
      { label: "Teléfono", model: "telefono", type: "text" },
    ];

    // Cuando cambie la selección en la tabla, copiar datos al formulario
    watch(proveedorSeleccionado, (newVal) => {
      if (newVal) {
        form.value = { ...newVal }; // cargar datos en formulario
        editingKey.value = newVal.documento ?? null; // guardar clave original
      }
      // si se deselecciona (newVal === null) dejamos el formulario tal cual (no se borra)
    });

    // ➕ AGREGAR PROVEEDOR
    const agregarProveedor = () => {
      if (form.value.nombre.trim() === "") {
        alert("Por favor ingresa el nombre del proveedor.");
        return;
      }
      // evitar duplicados por documento
      if (
        form.value.documento &&
        proveedores.value.some((p) => p.documento === form.value.documento)
      ) {
        alert("Ya existe un proveedor con ese documento.");
        return;
      }
      proveedores.value.push({ ...form.value });
      limpiarFormulario();
    };

    // ✏️ EDITAR PROVEEDOR (ahora NO borra el formulario)
    const editarProveedor = () => {
      if (!proveedorSeleccionado.value && !editingKey.value) {
        alert("Por favor selecciona un proveedor de la tabla para editar.");
        return;
      }

      // Buscar por la clave guardada (editingKey) para ubicar el índice correcto
      const key = editingKey.value ?? proveedorSeleccionado.value.documento;
      const index = proveedores.value.findIndex((p) => p.documento === key);

      if (index !== -1) {
        // Actualizar el registro en el array con los valores del formulario
        proveedores.value[index] = { ...form.value };
        // Actualizar la selección para que siga indicando el mismo registro (actualizado)
        proveedorSeleccionado.value = proveedores.value[index];
        // actualizar editingKey para el caso en que el documento haya cambiado
        editingKey.value = form.value.documento ?? null;
        alert("Proveedor actualizado correctamente.");
        // NO llamamos a limpiarFormulario() — el formulario queda con los datos editados
      } else {
        alert("No se encontró el proveedor seleccionado.");
      }
    };

    // 🗑️ ELIMINAR PROVEEDOR
    const eliminarProveedor = () => {
      if (!proveedorSeleccionado.value) {
        alert("Por favor selecciona un proveedor para eliminar.");
        return;
      }

      const confirmar = confirm(
        `¿Seguro que deseas eliminar al proveedor: ${proveedorSeleccionado.value.nombre}?`
      );
      if (confirmar) {
        proveedores.value = proveedores.value.filter(
          (p) => p.documento !== proveedorSeleccionado.value.documento
        );
        alert("Proveedor eliminado correctamente.");
        // borrar selección y limpiar formulario
        proveedorSeleccionado.value = null;
        editingKey.value = null;
        limpiarFormulario();
      }
    };

    // 🔍 BUSCAR PROVEEDOR
    const buscarProveedor = () => {
      if (!busqueda.value.trim()) {
        alert("Por favor ingresa un nombre o documento para buscar.");
        return;
      }
      const resultado = proveedores.value.find(
        (p) =>
          p.nombre.toLowerCase().includes(busqueda.value.toLowerCase()) ||
          p.documento.includes(busqueda.value)
      );
      if (resultado) {
        alert(`Proveedor encontrado: ${resultado.nombre}`);
        proveedorSeleccionado.value = resultado;
        // form se cargará automáticamente por el watch
        // guardar clave original
        editingKey.value = resultado.documento ?? null;
      } else {
        alert("Proveedor no encontrado.");
      }
    };

    // 🧹 LIMPIAR FORMULARIO
    const limpiarFormulario = () => {
      for (const key in form.value) form.value[key] = "";
    };

    return {
      busqueda,
      proveedores,
      proveedorSeleccionado,
      form,
      fields,
      agregarProveedor,
      editarProveedor,
      eliminarProveedor,
      buscarProveedor,
      limpiarFormulario,
    };
  },
};
</script>

<style scoped>
main {
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Segoe UI", sans-serif;
}
</style>
