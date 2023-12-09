import express from 'express';
import { mascotasRouter } from '../rutas/mascotasRouter.js';
import { db } from '../database/conexion.js';

//Crear la instancia de express
const app = express();

//constante que inicializa el puerto
const PORT = 9000;

//Manejo de la base de datos <- conexion
db.authenticate().then(()=>{
    console.log("Base de datos cargada con exito");
}).catch(err => {
    console.log("No se a podido conectar a la base de datos"+err);
});

//rutas
//DE TIPO GET
app.get('/', (req, res) => {
    res.send(" <h1> Hola backend MySQL </h1>");
});

//traer las rutas del archivo de rutas en /rutas/mascotasRouter
app.use('/mascotas', mascotasRouter);

//si se pudo sincronizar con la base de datos
db.sync().then(() => {
    //definir puerto de escucha
    app.listen(PORT, () => {
        console.log("servidor corriendo en puerto: " + PORT);
    });
}).catch(err=>{
    console.log("No se pudo sincronizar con la base de datos");
});






