import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// si importas con comillas->Es un archivo
// si importas sin comillas ->Es una depencencid e node 
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnect from './config/mongodb.js'
import handlerRoutes from './routes/index.js'



dotenv.config()
const PORT = process.env.PORT || 3000

const app = express()
//MiddleWare = Algo que se pone en medio de la request y la procesa
app.use(cors())
app.use(express.json())

/*Rutas estaticas*/
app.use("/music",express.static(__dirname +'/storage/musics'))
app.use("/image",express.static(__dirname +'/storage/images'))

app.listen(PORT,function(){ 
    console.log(`*** Server inicializado en http://localhost:${PORT} ***`)
})

try{
    await dbConnect()
    console.log("Conectado")
}catch(err){
    console.log("error al conectar en la base de datos")
    console.log(err)
}

/*Manejador rutas*/
app.use('/api',handlerRoutes)



/*Controlar errores*/
app.use(function(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        console.error("Error en multer");
        res.status(500).send({data:'Something broke!'});
      } else if(err){
        console.error(err.stack);
        res.status(500).send({data:err.stack});
      }
});
  