import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MunicipalityController } from './municipality/municipality.controller';
import { MunicipalityService } from './municipality/municipality.service';

@Module({
  imports: [],
  controllers: [AppController, MunicipalityController],
  providers: [AppService, MunicipalityService],
})
export class AppModule {}
