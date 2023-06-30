import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Mapbox } from "../Mapbox/Mapbox"

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(()=>Mapbox, (mapbox) => mapbox.plantingSite)
    mapbox: Mapbox

}