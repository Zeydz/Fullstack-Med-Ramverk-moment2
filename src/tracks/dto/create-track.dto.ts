import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

// DTO för att skapa en ny låt. Kontrollerar och validerar inkommande data.
export class CreateTrackDto {
  @IsString()
  @IsNotEmpty({ message: "Title får inte vara tom." })
  title: string;

  @IsString()
  @IsNotEmpty({ message: "Artist får inte vara tom." })
  artist: string;

  // Konverterar sträng till nummer och validerar
  @Type(() => Number)
  @IsNumber({}, { message: "yearReleased måste vara ett nummer." })
  yearReleased: number;

  @IsOptional()
  @IsBoolean()
  addedToPlaylist?: boolean;

  @IsOptional()
  @IsString()
  genre?: string;
}
