const { createApp } = Vue
  
createApp({
  data() {
    return {
      varString: "hola",
      varBoolean: true,
      varEntero: 5
    }
  }
}).mount('#app')