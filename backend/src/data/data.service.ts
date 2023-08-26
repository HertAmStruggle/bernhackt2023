import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

const AdmZip = require("adm-zip")
const fs = require("fs")

@Injectable()
export class DataService {

    constructor (private http: HttpService) {}

    async scrapeData() {
        await this.scrapeEnergyConsumption();

        return true
    }

    async scrapeEnergyConsumption() {
        this.http.get("https://opendata.geoimpact.ch/energiereporter/energyreporter_latest.zip", {
            responseType: "arraybuffer"
        }).subscribe(data => {
            const zipBuffer = data.data

            const zip = new AdmZip(zipBuffer)

            const entry = zip.getEntries().find(entry => entry.entryName.includes("municipality"))

            console.log(entry.entryName)
            const buffer = entry.getData()
            console.log(buffer.toString("utf-8"))
        })
    }

}
