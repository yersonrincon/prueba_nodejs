import { CHAR, DataTypes, DOUBLE, STRING } from 'sequelize';
import{ sequelize } from '../database/database.js';

 export const  Empleado = sequelize.define('empleado',{
    codigo:{
        type: DataTypes.INTEGER(10),  
        primaryKey: true,
        autoIncrement: true
    },
    nit:{
        type: DataTypes.STRING(9),
    },
    nombre:{
        type: DataTypes.STRING(100),
    },
    apellido1:{
        type: DataTypes.STRING(100),
    },
    apellido2:{
        type: DataTypes.STRING(100),
    }

})