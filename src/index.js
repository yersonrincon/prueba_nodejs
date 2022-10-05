import  app from './app.js';


import { sequelize } from "./database/database.js";


 async function main() {
  
    try{
      await sequelize.sync({force: false})
      app.listen(1234);
      console.log("el puerto esta corrineto ",1234);

    }catch(error){
        console.log( "herro de connecion en la base de datos",error)
    }
 }

 main();
