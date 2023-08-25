export interface Municipality {
    meta: {
        id: number;
        municipalityName: string;
        surveyParticipants: number;
    },
    facts: SectorData;
    survey: SectorData;
}

export interface SectorData {
    environment: {
        biodiversity: Indicator[];
        climate: Indicator[];
        energy: Indicator[];
        air: Indicator[];
        water: Indicator[];
        soil: Indicator[];
        environmentalConsumption: Indicator[];
    },
    social: {
        supplyAndServices: Indicator[];
        health: Indicator[];
        qualityOfLiving: Indicator[]; // Wohnangebot und Raumentwicklung
        security: Indicator[];
        socialSupportAndSolidarity: Indicator[];
        equalityAndIntegration: Indicator[];
        leisureTimeOffers: Indicator[];
        mobility: Indicator[];
        education: Indicator[];
    },
    economy: {
        wageAndCostOfLiving: Indicator[];
        occupation: Indicator[];
        professionals: Indicator[];
        economicalResiliance: Indicator[];
        innovation: Indicator[];
        attractivenessForEmployers: Indicator[];
    }
}

export interface Indicator {
    name: string;
    value: number | undefined;
    participants?: number;
}