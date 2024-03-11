const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   
      reporter: 'mochawesome',
     // implement node event listeners here
   
  },
  env:{
    URL:'http://54.238.106.146:5557/login'
  }

  

});
