const express=require(`express`);
const conexionDB=require(`./db`);
const app=express();

require(`dotenv`).config();
//conexion a la db
conexionDB();
//configuracion
app.set("name","api-APIREST")
app.set("port",process.env.PORT||8010);
app.set("host",process.env.host||`localhost`);