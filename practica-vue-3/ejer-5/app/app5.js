const { createApp } = Vue;

createApp({
  data() {
    return {
      arrayCiudad: [{ ciudad: "El Alto" }, { ciudad: "Cobija" }],
      arrayDepartamento: [{ departamento: "La paz" }, { departamento: "Pando" }],
      arrayCodigo: [{ codigo: 201 }, { codigo: 202 }],
      arrayMusica: [{ musica: "cuarenta grados" }, { musica: "Perla" }],
    };
  },
}).mount("#app");
