import { Router } from "express";
import{getEmpleados,
       crearEmpleados,
       updateEmpleados,
       deleteEmpleados,
       getEmpleado} from '../controllers/empleados.contoller.js';
const router = Router()

router.get('/empleados',getEmpleados);
router.post('/empleados',crearEmpleados);
router.put('/empleados/:codigo',updateEmpleados);
router.delete('/empleados/:codigo',deleteEmpleados);
router.get('/empleados/:codigo',getEmpleado);


export default router;