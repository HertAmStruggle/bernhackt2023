import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MunicipalityController } from './municipality/municipality.controller';
import { MunicipalityService } from './municipality/municipality.service';
import { PrismaService } from './prisma/prisma.service';
import { DataService } from './data/data.service';
import { DataController } from './data/data.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController, MunicipalityController, DataController],
  providers: [AppService, MunicipalityService, PrismaService, DataService],
})
export class AppModule {}
