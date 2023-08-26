import {Municipality} from "./interfaces";

export const mockData: Municipality = {
        meta: {
            id: 1,
            municipalityName: 'Paradise',
            surveyParticipants: randomNumber()
        },
        facts: {
            environment: {
                biodiversity: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                climate: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                energy: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                air: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                water: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                soil: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                environmentalConsumption: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ]
            },
            social: {
                supplyAndServices: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                health: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                qualityOfLiving: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                security: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                socialSupportAndSolidarity: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                equalityAndIntegration: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                leisureTimeOffers: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                mobility: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                education: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ]

            },
            economy: {
                wageAndCostOfLiving: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                occupation: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                professionals: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                economicalResiliance: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                innovation: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                attractivenessForEmployers: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ]
            }
        },
        survey: {
            environment: {
                biodiversity: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                climate: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                energy: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                air: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                water: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                soil: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                environmentalConsumption: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ]
            },
            social: {
                supplyAndServices: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                health: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                qualityOfLiving: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                security: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                socialSupportAndSolidarity: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                equalityAndIntegration: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                leisureTimeOffers: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                mobility: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                education: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ]

            },
            economy: {
                wageAndCostOfLiving: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                occupation: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                professionals: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                economicalResiliance: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                innovation: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ],
                attractivenessForEmployers: [
                    {
                        name: 'test',
                        value: randomNumber()
                    }
                ]
            }
        }
}

export function randomNumber() {
    return Math.floor(Math.random() * 11)
}