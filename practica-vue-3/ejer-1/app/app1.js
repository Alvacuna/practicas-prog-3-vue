const { createApp } = Vue
  
createApp({
  data() {
    return {
      arrayNumbers: [1,2,3,4,5,6,7,8,9,10],
      number: 0
    }
  }
}).mount('#app')