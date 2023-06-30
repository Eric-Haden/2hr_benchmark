import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Mapbox } from "../Mapbox/Mapbox"

@Entity()
export class PlantingSite {

    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(()=>Mapbox, (mapbox) => mapbox.plantingSite)
    mapbox: Mapbox

}
