import { PrismaClient } from '@prisma/client';
import {randomNumber} from "../src/mockData";

const prisma = new PrismaClient();

async function main() {
    // deleting all existing data
    await prisma.indicator.deleteMany({});

    await prisma.indicator.create({
        data: {
            name: "Erster",
            value: randomNumber(),
            isSurvey: false
        }
    })
    await prisma.indicator.create({
        data: {
            name: "Zweiter",
            value: randomNumber(),
            isSurvey: true
        }
    })
    await prisma.indicator.create({
        data: {
            name: "Dritter",
            value: randomNumber(),
            isSurvey: true
        }
    })
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });