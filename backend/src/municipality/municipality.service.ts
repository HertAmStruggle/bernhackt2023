import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class MunicipalityService {
    constructor(private prisma: PrismaService) {
    }
    async getAllIndicators(){
        return this.prisma.indicator.findMany({})
    }
}