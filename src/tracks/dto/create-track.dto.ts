// DTO för att skapa en ny låt
export class CreateTrackDto {
  title: string;
  artist: string;
  yearReleased: number;
  addedToPlaylist?: boolean; // valfritt
  genre?: string;          
}