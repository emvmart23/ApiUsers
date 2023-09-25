import express, { Request, Response, Application } from "express";
import { ConnectDatabase } from "./db/database";


ConnectDatabase()

const app: Application = express();

app.get('/', ( req: Request, res: Response) => {
    res.send('Welcome max')
})

app.listen(3000, () => {
    console.log('corriendo el puerto 3000')
})