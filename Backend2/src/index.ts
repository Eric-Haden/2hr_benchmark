import { AppDataSource } from "./data-source"
import fastify from "fastify"
import CategoryRoutes from "./Category/routes"
import MapboxRoutes from "./Mapbox/routes"
import PlantingSiteRoutes from "./PlantingSite/routes"
import cors from '@fastify/cors'



    const server = fastify()
    AppDataSource.initialize()  
    server.decorate("db", AppDataSource)
    server.register(cors)
    server.register(CategoryRoutes)
    server.register(MapboxRoutes)
    server.register(PlantingSiteRoutes)

          
    server.listen({ port: 3000, host: '127.0.0.1' }, (err, address) => {
        if (err) throw err
        console.log(`server listening on ${address}`)
    })