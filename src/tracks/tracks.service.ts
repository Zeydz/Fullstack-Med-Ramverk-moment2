import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Track, TrackDocument } from './schemas/track.schema';

@Injectable()
export class TracksService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
  ) {}

  // Skapar en ny track
  async create(createTrackDto: CreateTrackDto): Promise<Track> {
    const createdTrack = new this.trackModel(createTrackDto);
    return createdTrack.save();
  }

  // Hämtar alla tracks
  async findAll(): Promise<Track[]> {
    return this.trackModel.find().exec();
  }

  // Hämtar en track baserat på ID
  async findOne(id: string): Promise<Track> {
    const track = await this.trackModel.findById(id).exec();
    if (!track) {
      throw new NotFoundException(`Track med ID ${id} hittades inte`);
    }
    return track;
  }

  // Tar bort en track baserat på ID
  async remove(id: string): Promise<Track> {
    const track = await this.trackModel.findByIdAndDelete(id).exec();
    if (!track) {
      throw new NotFoundException(`Track med ID ${id} hittades inte`);
    }
    return track;
  }
}
