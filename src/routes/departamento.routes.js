import { Router } from "express";
import{getDepartamentos,
       getDepartamento,
       crearDepartamentos,
       updateDepartamento,
       deleteDepartamento} from '../controllers/departamentos.controller.js';
const router = Router()

router.get('/departamentos',getDepartamentos);
router.post('/departamentos',crearDepartamentos);
router.put('/departamentos/:codigo',updateDepartamento);
router.delete('/departamentos/:codigo',deleteDepartamento);
router.get('/departamentos/:codigo',getDepartamento);

export default router;