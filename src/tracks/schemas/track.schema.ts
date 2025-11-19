import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

// Definierar hur ett Track-dokument ser ut i MongoDB
export type TrackDocument = Track & Document;

// Använder dekoratorer för att definiera schema
@Schema()
export class Track {
    @Prop({ required: true })
    title: string;
    
    @Prop({ required: true })
    artist: string;

    @Prop({ required: true })
    yearReleased: number;

    @Prop({ default: false})
    addedToPlaylist: boolean;

    @Prop()
    genre: string;
}

// Skapar schema från klassen ovanför
export const TrackSchema = SchemaFactory.createForClass(Track);