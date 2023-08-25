import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { MunicipalityService } from './municipality.service';
import { mockData } from 'src/mockData';

@Controller('municipality')
export class MunicipalityController {

    constructor (private municipalityService: MunicipalityService) {}

    @Get()
    async getMockMunicipality() {
        return mockData;
    }

    @Get('all')
    async getAllMunicipalities() {
        return new HttpException("not implemented", 501)
    }

    @Get('/:id')
    async getMunicipalityById(@Param('id') id: number) {
        return new HttpException(`not implemented: ${id}`, 501)
    }

}
