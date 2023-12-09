import express from 'express'
import { crearMascota, mascotaActualizar, mascotaEliminar, mascotaEncontrar, mascotaEncontrarTodos } from '../controladores/mascotasControlador.js';

// crear la instancia de tipo routerS
const mascotasRouter = express.Router();

//rutas
//GET <- obtener info
mascotasRouter.get('/', (req, res)=>{
    res.send("Bienvenido a Mascotas");
});

mascotasRouter.get('/buscar/:id', (req, res)=>{
    mascotaEncontrar(req, res);
});

mascotasRouter.get('/buscar', (req, res)=>{
    mascotaEncontrarTodos(req, res);
});

//POST <- enviar info al software
mascotasRouter.post('/crear', (req, res)=>{
    //llamar a la funcion del controlador
    crearMascota(req, res);
});

//PUT <- cuando se desea actualizar elementos
mascotasRouter.put('/actualizar/:id', (req, res)=>{
    mascotaActualizar(req, res);
});

//DELETE <- para eliminar elementos
mascotasRouter.delete('/eliminar/:id', (req, res)=>{
    mascotaEliminar(req, res);
});

export {mascotasRouter};