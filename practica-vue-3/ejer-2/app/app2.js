const { createApp } = Vue
  
createApp({
  data() {
    return {
      arrayNumbers: [1,2,3,4,5,6,7,8,9,10],
      arrayBooleans: [true, false],
      arrayStrings: ["hola" , "mundo", "esto", "esta", "hecho", "en", "vue"]
    }
  }
}).mount('#app')