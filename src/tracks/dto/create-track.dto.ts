import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { NoWhitespace } from 'src/validators/no-whitespace.validator';

// DTO för att skapa en ny låt. Kontrollerar och validerar inkommande data.
export class CreateTrackDto {
  @NoWhitespace()
  @IsString({ message: "'Title' måste vara text." })
  @IsNotEmpty({ message: "'Title' får inte vara tom." })
  title: string;

  @NoWhitespace()
  @IsString({ message: "'Artist' måste vara text." })
  @IsNotEmpty({ message: "'Artist' får inte vara tom." })
  artist: string;

  // Använder Type för att omvandla inkommande data till nummer
  @Type(() => Number)
  @IsNumber({}, { message: "'yearReleased' måste vara ett nummer." })
  @IsNotEmpty({ message: "'yearReleased' får inte vara tom." })
  @Min(1000, { message: "'yearReleased' verkar inte vara ett riktigt år." })
  yearReleased: number;

  @IsOptional()
  @IsBoolean({ message: "'addedToPlaylist' måste vara true eller false." })
  addedToPlaylist?: boolean;

  @NoWhitespace()
  @IsOptional()
  @IsString({ message: "'genre' måste vara text." })
  genre?: string;
}
