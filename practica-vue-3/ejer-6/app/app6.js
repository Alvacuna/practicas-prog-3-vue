const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "",
      number: "",
      newAlumnObjects:"",
      alumnObjects: [
        {
          alumnos: "alvin",
          notas: 60,
        },
        {
          alumnos: "Gabriel",
          notas: 84,
        },
        {
          alumnos: "Martha",
          notas: 76,
        },
        {
          alumnos: "Selena",
          notas: 95,
        },
      ],
    };
  },
  methods: {
    saveAlumns(event){
        event.preventDefault();
        this.alumnObjects.push({alumnos:this.name, notas: this.number })
        this.name=""
        this.number=""
    }
  },
}).mount("#app");
