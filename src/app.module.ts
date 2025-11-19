import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TracksModule } from './tracks/tracks.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TracksModule],
})
export class AppModule {}
