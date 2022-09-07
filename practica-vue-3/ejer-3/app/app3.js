const { createApp } = Vue;

createApp({
  data() {
    return {
      arrayObjectsStudents: [
        { student: "alvin" },
        { student: "alva" },
        { student: "gabriel" },
        { student: "martha" },
      ],
      arrayObjectsSubjects: [
        { subjects: "matematicas" },
        { subjects: "biologia" },
        { subjects: "musica" },
        { subjects: "historia" },
      ],
      arrayObjectsProducts: [
        { products: "teclado" },
        { products: "mouse" },
        { products: "pantalla" },
        { products: "audifono" },
      ],
    };
  },
}).mount("#app");
