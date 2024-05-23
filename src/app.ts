import express, {Request, Response} from "express"
import router from "./utils/routes"
import cors from "cors"


function createApp(){

    const app = express()

    app.use(express.json())

    app.use("/api", router)

    // const corsOptions = {
    //     origin:["http://rafael.sistem.com","outra rota"],
    //     methods: ['GET']
    // }

    // app.use(cors(corsOptions))
    
    app.use()
    
    return app
}

export default createApp

