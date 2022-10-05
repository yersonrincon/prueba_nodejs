import { Departamento } from "../models/Departamento.js";

export  const getDepartamentos  = async(req, res) =>{
    try {
    
        const departamentos = await Departamento.findAll();
        res.json(departamentos);

    } 
    catch (error) {
        return res.status(500).json({message:error.message})
        
    }
   
};
export  const getDepartamento  = async(req, res) =>{
    try {
      
        const {codigo} = req.params;
        const departamento = await Departamento.findOne({
            where:{
            codigo,
            
            },  
        });
        if(!departamento)
           return res.status(401).json({
    
          msg: `El departamento con el codigo se elimino o no existe :${ codigo } `
           
        });
        res.json(departamento);
      } catch (error) {
        return res.status(500).json({message:error.message});
    }
     }; 

export const crearDepartamentos = async(req, res) =>{
    try {
        const {nombre,presupuesto}=req.body
        const newDepartamento = await Departamento.create({
          nombre,
          presupuesto,
        });
        
        res.json(newDepartamento);
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }

 };
 export const updateDepartamento = async(req,res)=>{
    
    try {
    const{ codigo }= req.params;
    const{nombre,presupuesto}= req.body;

    const departamento = await Departamento.findByPk(codigo);
   
    
    departamento.nombre= nombre;
    departamento.presupuesto =presupuesto;

     await departamento.save();
     res.json(departamento);
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
    


 };
 export const deleteDepartamento= async(req,res)=>{    
   
    try {
        const {codigo}= req.params;
        await Departamento.destroy({
            where:{
                codigo,
            }            
        });        
        return res.status(200).json({
            msg: `El departamento con el codigo se elimino :${ codigo } `             
        });
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
    
}