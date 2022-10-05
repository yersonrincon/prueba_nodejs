import express from "express";
import empleadosRoutes from "./routes/empleados.routes.js";
import departamentoRoutes from "./routes/departamento.routes.js";

const app = express();

//middlewares
app.use(express.json());
app.use(empleadosRoutes,departamentoRoutes);

export default app;