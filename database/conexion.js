import { Sequelize } from "sequelize";

const db = new Sequelize("mascotas", "mascotas", "mascotas2023", {
    dialect: "mysql",
    host:"localhost"
});

export {db}