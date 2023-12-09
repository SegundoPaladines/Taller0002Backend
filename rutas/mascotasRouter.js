import express from 'express'

// crear la instancia de tipo routerS
const mascotasRouter = express.Router();

//rutas
//GET <- obtener info
mascotasRouter.get('/', (req, res)=>{
    res.send("Bienvenido a Mascotas");
});

mascotasRouter.get('/buscar', (req, res)=>{
    res.send("Buscar Mascotas");
});

//POST <- enviar info al software
mascotasRouter.post('/crear', (req, res)=>{
    res.send("Crear Mascotas");
});

//PUT <- cuando se desea actualizar elementos
mascotasRouter.put('/actualizar/:id', (req, res)=>{
    res.send("Actualizar mascota");
});

//DELETE <- para eliminar elementos
mascotasRouter.delete('/eliminar/:id', (req, res)=>{
    res.send("Eliminar mascota");
});

export {mascotasRouter};