import { mascotas } from "../modelos/mascotasModelo.js";

//crear un recurso en la tabla
const crearMascota = (req, res) =>{
    if(!req.body.nombre){
        //si el nombre viene vacio respondo con un mensaje y el return me permite salir
        res.status(500).json({
            mensaje: "El nombre no puede estar vacio"
        });
        return;
    }

    //el dataset de la mascota, los datos que vienen en la solicitud
    const dataset = {
        nombre: req.body.nombre,
        edad: req.body.edad
    };

    //Crear la mascota en la base de datos, el then si se hizo bien el catch cuando hay un error
    mascotas.create(dataset).then((resultado) => {
        //Si se agrega correctamente
        res.status(200).json({
            mensaje: "Registro creado correctamente"
        });
    }).catch(err => {
        //Si ocurre algo
        res.status(500).json({
            mensaje:"No se ha podido crear el registro "+err
        });
    });
}

//buscar por ID
const mascotaEncontrar = (req, res) =>{
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(500).json({
            mensaje:"El id no puede ser vacio"
        });
        return;
    }

    //encontrar por ID
    mascotas.findByPk(id).then((resultado) => {
        //Si todo sale bien
        res.status(200).json(resultado);
    }).catch(err => {
        //si algo no sale bien
        res.status(500).json({
            mensaje:"No se ha podido encontrar el registro "+err
        });
    });
}

//listar todas las mascotas de la tabla
const mascotaEncontrarTodos = (req, res) =>{
    //si todo sale bien
    mascotas.findAll().then((resultado) => {
        res.status(200).json(resultado);
    }).catch(err => {
        //si ocurre algun error
        res.status(500).json({
            mensaje:"No se ha podido encontrar ningun registro "+err
        });
    });
}

//actualizar una mascota
const mascotaActualizar = (req, res) => {

    const id = parseInt(req.params.id);

    //si no envia ningun dato
    if(!req.body.nombre && !req.body.edad){
        res.status(400).json({
            mensaje: "No se encuentran datos para actualizar"
        });
    }else{
        //capturar los datos a actualizar
        const nombre= req.body.nombre;
        const edad = req.body.edad;

        //la actualizacion como tal
        mascotas.update({ nombre:nombre, edad: edad}, {
            where: {
                id: id
            }
        }).then((resultado) => {
            res.status(200).json({
                mensaje: "Registro actualizado correctamente"
            });
        }).catch(err => {
            res.status(500).json({
                mensaje:"No se ha podido actualizar el registro "+err
            });
        });
    }
}

//eliminar una mascota
const mascotaEliminar = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(500).json({
            mensaje:"El id no puede ser vacio"
        });
        return;
    }
    
    mascotas.destroy({
        where: {
          id: id
        }
    }).then((resultado) => {
        res.status(200).json({
            mensaje: "Registro eliminado correctamente"
        });
    }).catch(err => {
        res.status(500).json({
            mensaje:"No se ha podido eliminar el registro "+err
        });
    });
}

export { crearMascota, mascotaActualizar, mascotaEliminar, mascotaEncontrar, mascotaEncontrarTodos }