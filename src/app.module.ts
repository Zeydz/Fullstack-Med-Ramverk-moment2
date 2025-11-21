import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TracksModule } from './tracks/tracks.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Läser in .env filen och hämtar URL för MongoDB
    ConfigModule.forRoot({ isGlobal: true }), // läser .env
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URL'), // hämtar URL från .env (DATABAS URL, SKAPA EGEN ENV FIL OCH ERSÄTT MED DIN EGEN URL)
      }),
    }),
    TracksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}