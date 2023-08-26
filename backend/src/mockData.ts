import { Municipality } from './interfaces';

export const mockData: Municipality = {
        meta: {
            id: 1,
            municipalityName: 'Biel/Bienne',
            surveyParticipants: randomNumber()
        },
        facts: {
            environment: {
                biodiversity: [
                    {
                        name: 'Anzahl Bäume',
                        value: randomNumber()
                    }
                ],
                climate: [
                    {
                        name: 'CO2 Gehalt',
                        value: randomNumber()
                    }
                ],
                energy: [
                    {
                        name: 'Grüne-Energie',
                        value: randomNumber()
                    }
                ],
                air: [
                    {
                        name: 'Luftqualität',
                        value: randomNumber()
                    }
                ],
                water: [
                    {
                        name: 'Wasserqualität',
                        value: randomNumber()
                    }
                ],
                soil: [
                    {
                        name: 'Bodenqualität',
                        value: randomNumber()
                    }
                ],
                environmentalConsumption: [
                    {
                        name: 'Ökologischer Fussabdruck',
                        value: randomNumber()
                    }
                ]
            },
            social: {
                supplyAndServices: [
                    {
                        name: 'Generelle Infrastruktur',
                        value: randomNumber()
                    }
                ],
                health: [
                    {
                        name: 'Gesundheitsversorgung',
                        value: randomNumber()
                    }
                ],
                qualityOfLiving: [
                    {
                        name: 'Lebensqualität',
                        value: randomNumber()
                    }
                ],
                security: [
                    {
                        name: 'Sicherheir gemessen an Verbrechen',
                        value: randomNumber()
                    }
                ],
                socialSupportAndSolidarity: [
                    {
                        name: 'Solidaritätsgrad',
                        value: randomNumber()
                    }
                ],
                equalityAndIntegration: [
                    {
                        name: 'Eingliederungsgrad',
                        value: randomNumber()
                    }
                ],
                leisureTimeOffers: [
                    {
                        name: 'Freizeitangebote',
                        value: randomNumber()
                    }
                ],
                mobility: [
                    {
                        name: 'Öffentlicher Verkehr',
                        value: randomNumber()
                    }
                ],
                education: [
                    {
                        name: 'Qualität der Gymnasien',
                        value: randomNumber()
                    }
                ]

            },
            economy: {
                wageAndCostOfLiving: [
                    {
                        name: 'Wohnungspreise',
                        value: randomNumber()
                    }
                ],
                occupation: [
                    {
                        name: 'Berufsauswahl',
                        value: randomNumber()
                    }
                ],
                professionals: [
                    {
                        name: 'Spezialisierungen',
                        value: randomNumber()
                    }
                ],
                economicalResiliance: [
                    {
                        name: 'Ökonomische Stabilität',
                        value: randomNumber()
                    }
                ],
                innovation: [
                    {
                        name: 'Innovationsgrad',
                        value: randomNumber()
                    }
                ],
                attractivenessForEmployers: [
                    {
                        name: 'Benefits für Arbeitnehmende',
                        value: randomNumber()
                    }
                ]
            }
        },
        survey: {
            environment: {
                biodiversity: [
                    {
                        name: 'Anzahl Bäume',
                        value: randomNumber()
                    }
                ],
                climate: [
                    {
                        name: 'CO2 Gehalt',
                        value: randomNumber()
                    }
                ],
                energy: [
                    {
                        name: 'Grüne-Energie',
                        value: randomNumber()
                    }
                ],
                air: [
                    {
                        name: 'Luftqualität',
                        value: randomNumber()
                    }
                ],
                water: [
                    {
                        name: 'Wasserqualität',
                        value: randomNumber()
                    }
                ],
                soil: [
                    {
                        name: 'Bodenqualität',
                        value: randomNumber()
                    }
                ],
                environmentalConsumption: [
                    {
                        name: 'Ökologischer Fussabdruck',
                        value: randomNumber()
                    }
                ]
            },
            social: {
                supplyAndServices: [
                    {
                        name: 'Generelle Infrastruktur',
                        value: randomNumber()
                    }
                ],
                health: [
                    {
                        name: 'Gesundheitsversorgung',
                        value: randomNumber()
                    }
                ],
                qualityOfLiving: [
                    {
                        name: 'Lebensqualität',
                        value: randomNumber()
                    }
                ],
                security: [
                    {
                        name: 'Sicherheir gemessen an Verbrechen',
                        value: randomNumber()
                    }
                ],
                socialSupportAndSolidarity: [
                    {
                        name: 'Solidaritätsgrad',
                        value: randomNumber()
                    }
                ],
                equalityAndIntegration: [
                    {
                        name: 'Eingliederungsgrad',
                        value: randomNumber()
                    }
                ],
                leisureTimeOffers: [
                    {
                        name: 'Freizeitangebote',
                        value: randomNumber()
                    }
                ],
                mobility: [
                    {
                        name: 'Öffentlicher Verkehr',
                        value: randomNumber()
                    }
                ],
                education: [
                    {
                        name: 'Qualität der Gymnasien',
                        value: randomNumber()
                    }
                ]

            },
            economy: {
                wageAndCostOfLiving: [
                    {
                        name: 'Wohnungspreise',
                        value: randomNumber()
                    }
                ],
                occupation: [
                    {
                        name: 'Berufsauswahl',
                        value: randomNumber()
                    }
                ],
                professionals: [
                    {
                        name: 'Spezialisierungen',
                        value: randomNumber()
                    }
                ],
                economicalResiliance: [
                    {
                        name: 'Ökonomische Stabilität',
                        value: randomNumber()
                    }
                ],
                innovation: [
                    {
                        name: 'Innovationsgrad',
                        value: randomNumber()
                    }
                ],
                attractivenessForEmployers: [
                    {
                        name: 'Benefits für Arbeitnehmende',
                        value: randomNumber()
                    }
                ]
            }
        }
}

export function randomNumber() {
  return Math.floor(Math.random() * 11);
}
