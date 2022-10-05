
import { Empleado } from "../models/Empleado.js";

export  const getEmpleados  = async(req, res) =>{
    try {
      //  throw new Error('no es una ruta');
        const empleados = await Empleado.findAll();
        console.log(empleados);
        res.json(empleados);
        
    } catch (error) {
        return res.status(500).json({message:error.message})
        
    }
   
};
export const crearEmpleados = async(req, res) =>{
    try {
        const {nit,nombre,apellido1,apellido2,codigo_departamento}=req.body;
        console.log(req.body)
        const newEmpleado = await Empleado.create({
         
          nit,
          nombre,
          apellido1,
          apellido2,          
          departamentoCodigo: codigo_departamento,
        });
        
        res.json(newEmpleado);
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }


 };
 export const updateEmpleados = async(req,res)=>{
    
    try {
    const{ codigo }= req.params;
    const{nit,nombre,apellido1,apellido2,codigo_departamento}= req.body;

    const empleado = await Empleado.findByPk(codigo);
   
     empleado.nit = nit;
     empleado.nombre= nombre;
     empleado.apellido1= apellido1;
     empleado.apellido2= apellido2;
     empleado.departamentoCodigo = codigo_departamento,

     await empleado.save();
     res.json(empleado);
     
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
    


 };
  export const getEmpleado = async ( req , res) =>{
    
    try {
    const {codigo} = req.params;
    const empleado = await Empleado.findOne({
        where:{
        codigo,
        },  
    });
    if(!empleado)
       return res.status(401).json({
              msg: `El empleado con el codigo: ${ codigo } no existe`
       
    });
    res.json(empleado);
  } catch (error) {
    return res.status(500).json({message:error.message});
}
 };

 
 export const deleteEmpleados = async(req,res)=>{    
   
    try {
        const {codigo}= req.params;

        const empleado = await Empleado.findOne({
            where:{
            codigo,
            },  
        });
        if(!empleado)
           return res.status(401).json({
                  msg: `El empleado con el codigo: ${ codigo } no existe`
           
        });
        await Empleado.destroy({
            where:{
                codigo,
            }            
        });        
        return res.status(200).json({
            msg: `El empleado con el codigo:${ codigo } se elimino`
        });
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
    
}