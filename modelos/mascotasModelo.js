import { Sequelize } from "sequelize";
import { db } from "../database/conexion";

//definir la tabla
const mascotas = db.define("mascotas",{
    //definir los atributos
    id:{
        //tipo de dato
        type:Sequelize.INTEGER,
        //si se puede dejar vacio
        allowNull: false,
        //si es llave primaria
        primaryKey: true
    },
    nombre:{
        //tipo de dato
        type:Sequelize.STRING,
        //si se puede dejar vacio
        allowNull: true
    },
    edad:{
        //tipo de dato
        type:Sequelize.INTEGER,
        //si se puede dejar vacio
        allowNull: true
    }
});

export {mascotas}