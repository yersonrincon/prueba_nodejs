import Sequelize from 'sequelize';
 export const sequelize= new Sequelize(
    "prueba_node",
    "postgres",
    "myscret123456",
    {

    host:'localhost',
    dialect:'postgres'
})


