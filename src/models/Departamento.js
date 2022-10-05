import { DataTypes, DOUBLE, STRING } from 'sequelize';
import{ sequelize } from '../database/database.js';
import { Empleado } from './Empleado.js';

export const Departamento = sequelize.define('departamento',{
    codigo:{
        type: DataTypes.INTEGER(10),    
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING(100),
    },
    presupuesto:{
        type: DataTypes.DOUBLE,
    }

   
})
Departamento.hasMany(Empleado,{
    foreinKey: 'codigo_departamento',
    sourceKey:'codigo'

})
Empleado.belongsTo(Departamento,{
    foreinKey: 'codigo_departamento',
    targetId:'codigo'

})
