import "reflect-metadata"
import { DataSource } from "typeorm"
import { PlantingSite} from "./PlantingSite/PlantingSite"
import { Mapbox } from "./Mapbox/Mapbox"
import { Category } from "./Category/Category"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "example",
    synchronize: true,
    logging: false,
    entities: [Mapbox, PlantingSite, Category],
    migrations: [],
    subscribers: [],
})
