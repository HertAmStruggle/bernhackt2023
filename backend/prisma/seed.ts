import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const municipality1 = await prisma.municipality.create({
        data: {
            municipalityName: 'Sample Municipality 1',
            surveyParticipants: 100,
            facts: {
                create: {
                    factsId: 1,
                    environment: {
                        create: {
                            biodiversity: {
                                create: { name: 'Biodiversity Indicator 1', value: 0.75 }
                            },
                            climate: {
                                create: { name: 'Climate Indicator 1', value: 0.85 }
                            }
                            // ... Add more environment indicators as needed
                        }
                    },
                    social: {
                        create: {
                            supplyAndServices: {
                                create: { name: 'Supply and Services Indicator 1', value: 0.9 }
                            },
                            health: {
                                create: { name: 'Health Indicator 1', value: 0.7 }
                            }
                            // ... Add more social indicators as needed
                        }
                    },
                    economy: {
                        create: {
                            wageAndCostOfLiving: {
                                create: { name: 'Wage and Cost of Living Indicator 1', value: 0.8 }
                            },
                            occupation: {
                                create: { name: 'Occupation Indicator 1', value: 0.6 }
                            }
                            // ... Add more economy indicators as needed
                        }
                    }
                }
            }
        }
    });

    // ... Create more municipalities and data as needed

    console.log('Sample data created:', municipality1);
}

main()
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
