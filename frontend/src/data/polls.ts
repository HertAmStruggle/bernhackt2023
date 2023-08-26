export interface Indicator {
  name: string;
  questions: string[];
}

export interface SingleSectorPoll {
  sector: string;
  indicators: Indicator[];
}

export const environment: SingleSectorPoll = {
  sector: "Umwelt",
  indicators: [
    {
      name: "biodiversity",
      questions: [
        "Gibt es ausreichend Schutzflächen in Ihrer Gemeinde, damit sich die Natur entfalten kann?",
        "Gibt es genügend Bemühungen die Pflanzen- und Tierartenvielfalt in Ihrer Region zu erhalten und zu fördern",
      ],
    },
    {
      name: "climate",
      questions: [
        "Gibt es in Ihrer Region Massnahmen zur Bekämpfung des Klimawands oder Anpassungen an diesen",
        "Machen sich bereits Auswirkungen des Klimawandels in Ihrer Gemeinde bemerkbar?",
      ],
    },
    {
      name: "energy",
      questions: [
        "Wie gross sind die Bemühungen  in Ihrer Gemeinde den Energieverbrauch zu reduzieren?",
        "Werden erneuerbare Energien gefördert? (z.B Ausbau Photovoltaik, Untersützungleistungen, Ausbau Wärmeverbund etc.",
      ],
    },
    {
      name: "air",
      questions: [
        "Wie beurteilen Sie die Luftqualität in ihrer Gemeinde?",
      ]
    },
    {
      name: "water",
      questions: [
        "Ist Wasser als Ressrouce in der Region ein Thema? Machen sich Herausforderungen in Zusammnehang mit Wasser (Trockenheit, Überschwemmungen) bemerkbar?",
        "Wie schätzen Sie die Qualität der Gewässer in Ihrer Region ein?",
        "x",
      ]
    },
    {
      name: "soil",
      questions: [
        "Wie schätzen Sie die Qualität der Böden in Ihrer Region ein?",
        "Sind Ihnen Massnahmen bekannt, welche die Bodenqualität fördern? ",
      ]
    },
    {
      name: "environmentalConsumption",
      questions: [
        "Inwiefern berücksichten Sie soziale und ökologische Kriterien beim Einkaufen/Beschaffung von Ressourcen",
        "Gibt es in Ihrer Region Angebote/Projekte, welche den nachhaltigen Konsum fördern? (zB: Leihbar, Repaircafe, Tauschbörse, Brockenstube etc."
      ]
    }
  ]
}

export const social: SingleSectorPoll = {
  sector: "Sozial",
  indicators: [
    {
      name: "supplyAndServices",
      questions: [
        "Wie zufrieden sind sie mit dem Einkaufs- und Dienstleistungsangebote in Ihrer Region?",
      ],
    },
    {
      name: "health",
      questions: [
        "Wie gut ist das Angebot der medizinischen Grundversorgung?",
        "x",
      ],
    },
    {
      name: "qualityOfLiving",
      questions: [
        "x",
        "Ist das Wohnraum-Angebot in Ihrer Gemeinde attraktiv und vielfältig (z.B. für alle Generationen, Preis, Grösse",
        "x",
        "Wie gross ist der Bedarf nach zusätzlichen Wohnraum?",
        "x",
      ],
    },
    {
      name: "security",
      questions: [
        "Wie sicher ist der Strassenverkehr?",
        "Wie sicher fühlen Sie sich in Ihrer Region?",
      ]
    },
    {
      name: "socialSupportAndSolidarity",
      questions: [
        "Wie nehmen Sie die Solidarität in Ihrer Region wahr",
        "Gibt es in Ihrer Region ausreichend Unterstützungsangebote für beispielsweise ältere Menschen, Famlien, Bedürftige us",
      ]
    },
    {
      name: "equalityAndIntegration",
      questions: [
        "Werden Minoritäten und Andersdenkende in Ihrer Region akzeptiert und integriert?",
        "x",
        "Gibt es Bemühungen die Gleichberechtigung von Frau und Mann zu fördern? Beispielsweise durch die Vereinbarkeit von Beruf und Familie (Kitaplätze etc.)",
        "x",
        "x",
        "x",
      ]
    },
    {
      name: "leisureTimeOffers",
      questions: [
        "Sind Sie zufrieden mit den Freizeit-, Sport- und Kulturangebote in Ihrer Region?",
        "x",
        "x",
        "Stehen ausreichend Orte für Begegnungen wie zum Beispiel lokale Treffpunkte zur Verfügung?",
      ]
    },
    {
      name: "mobility",
      questions: [
        "Wie zufriedenstellend ist das Mobilitätsangebot des öffentlichen Verkehrs in Ihrer Region (ÖV, motorisierter Verkehr, Langsamverkehr etc.)",
        "Gibt es in Ihrer Region Bemühungen die Mobilität zu fördern? (Car-Sharing, Mitfahrbänkli, Bike-Sharing)",
      ]
    },
    {
      name: "education",
      questions: [
        "Sind in Ihrer Region genügend Bildungsmöglichkeiten (Grund-, Aus- , und Weiterbildung) vorhanden",
        "Wie zufrieden sind Sie mit der Qualität dieser Bildungsangebote in Ihrer Region?"
      ]
    }
  ]
}

export const economy: SingleSectorPoll = {
  sector: "Wirtschaft",
  indicators: [
    {
      name: "wageAndCostOfLiving",
      questions: [
        "Stimmt das Verhältnis Ihres Einkommmens mit den Lebenskosten in Ihrer Region überein?",
        "Wie hoch sind die Lebenskosten in Ihrer Region?",
        "x",
        "x",
      ],
    },
    {
      name: "occupation",
      questions: [
        "x",
        "Hat es genügend attraktive Arbeitsplätze in Ihrer Region?",
        "x",
        "x",
      ],
    },
    {
      name: "professionals",
      questions: [
        "Können die lokalen Unternehmen freie Stellen einfach und zufriedenstellend besetzen?",
        "x",
      ],
    },
    {
      name: "economicalResiliance",
      questions: [
        "Wie gut glauben Sie sind die Firmen in Ihrer Gemeinde für die Zukunft (Trends, Krisen etc.) gerüstet",
        "Wie nehmen Sie die Verteilung der Branchen in Ihrer Region wahr?",
      ]
    },
    {
      name: "innovation",
      questions: [
        "Wie gross ist die Akzeptanz für Neues und Innovationen in Ihrer Region?",
        "Wie innovativ sind die Unternehmen in Ihrer Region?",
        "x",
      ]
    },
    {
      name: "attractivenessForEmployers",
      questions: [
        "Gibt es in Ihrer Region Bemühungen neueUnternehmen anzusiedeln?",
        "Wie attraktiv erachten Sie Ihre Region für die Neusansiedlung von Unternehmen?"
      ]
    },
  ]
}

export const polls: SingleSectorPoll[] = [
  environment, social, economy
]
