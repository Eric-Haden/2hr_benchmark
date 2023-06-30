import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { PlantingSite } from "../PlantingSite/PlantingSite"
import { Category } from "../Category/Category"

@Entity()
export class Mapbox {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=>PlantingSite, (plantingSite) => plantingSite.mapbox)
    plantingSite: PlantingSite

    @ManyToOne(()=>Category, (category) => category.mapbox)
    category: Category

}
