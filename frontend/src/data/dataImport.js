const {writeFile} = require('fs');
const API_URL = 'http://localhost:3000/municipalities/'

let survey_indicators = [];

// let fact_indicators = [];
async function loopPatch() {
  for (let i = 0; i < 2136; i++) {
    survey_indicators = [
      {
        'name': 'Luftqualität',
        'value': (Math.random() * 11).floor,
        'subject': 'Luft',
        'sector': 'environment'
      },
      {
        'name': 'Ökologischer Fussabdruck',
        'value': (Math.random() * 11).floor,
        'subject': 'Ökologischer Verbrauch',
        'sector': 'environment'
      },
    ]

    await fetch(API_URL + i, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(survey_indicators)
    })
  }
}

// loopPatch()

/*
survey_indicators = [
  {
    'name': 'Luftqualität',
    'value': (Math.random() * 11).floor,
    'subject': 'Luft',
    'sector': 'environment'
  },
  {
    'name': 'Ökologischer Fussabdruck',
    'value': (Math.random() * 11).floor,
    'subject': 'Ökologischer Verbrauch',
    'sector': 'environment'
  },
]
async function test() {
  await fetch(API_URL + 1, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(survey_indicators)
  })
}

test()

 */

function fetchAndEdit() {
  let modifiedData = null;

  fetch(API_URL).then(response => response.json()).then(data => {
    modifiedData = data.map(municipality => ({
      ...municipality,
      survey_indicators: [
        {
          name: 'Energieverbrauch pro Einwohner*in',
          subject: 'Energie',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: '"Energiequalität (Anteil erneuerbare Energie und Fortschritte in diesem Bereich)',
          subject: 'Energie',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Luftschadstoffkonzentration',
          subject: 'Luft',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Trinkwasserqualität (Nitratgehalt im Trinkwasser)',
          subject: 'Wasser',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Grundwasserzustand (Nitratkonzentration und VOC im Grundwasser)',
          subject: 'Wasser',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Oberflächenwasserzustand (chemische Gewässerzustand anhand verschiedenenr Stoffe wie Phospht, Nitrati, Ammonium etc.)',
          subject: 'Wasser',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Wasserstress für Pflanzen / Wasserverfügbarkeit im Boden',
          subject: 'Wasser',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Bewirtschaftung Böden: Erosionsrisiko',
          subject: 'Boden',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Bodenqualität',
          subject: 'Boden',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Siedlungsabfall pro Einwohner*in ',
          subject: 'Nachhaltiger Konsum ',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Siedlungsfläche pro Kopf ',
          subject: 'Nachhaltiger Konsum ',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Einkauf- und Dienstleistungsangebot (Erreichbarkeit Lebensmittelgeschäfte, Restaurant, Cafes und allgemeines Angebot)',
          subject: 'Versorgung und Dienstleistung',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'medizinisches Angebot (Anzahl lokaler Angebote und Erreichbarkeit medizinischer Grundversorungseinrichtungen)',
          subject: 'Gesundheit',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Plätze in Pflegeheimen ',
          subject: 'Gesundheit',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Raumnutzerdichte',
          subject: 'Wohnangebot und Raumentwicklung ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Diversität Wohnangebot',
          subject: 'Wohnangebot und Raumentwicklung ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Baulandreserve',
          subject: 'Wohnangebot und Raumentwicklung ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Bevölkerungsanteil ausserhalb der Bauzone',
          subject: 'Wohnangebot und Raumentwicklung ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Wohnungsleerstand',
          subject: 'Wohnangebot und Raumentwicklung ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Bautätigkeit',
          subject: 'Wohnangebot und Raumentwicklung ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Strassenverkehrsunfälle mit Personenschaden (pro 1000 Einwohner*innen) ',
          subject: 'Sicherheit',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Anzahl Straftaten (pro 1000 Einwohner*innen) ',
          subject: 'Sicherheit',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Strassenverkehrsunfälle mit Personenschaden (pro 1000 Einwohner*innen) ',
          subject: 'Soziale Unterstützung und Solidariät',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Anzahl Straftaten (pro 1000 Einwohner*innen) ',
          subject: 'Soziale Unterstützung und Solidariät',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Sozialhilfequote',
          subject: 'Soziale Unterstützung und Solidariät',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Anzahl Vereine mit sozialem Zweck (pro 1000 Einwohner*innen)',
          subject: 'Soziale Unterstützung und Solidariät',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Einbürgerunsziffer ',
          subject: 'Gleichberechtigung und Integration ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Finanzielle Ungleichheit (Gini-Koeffizient) ',
          subject: 'Gleichberechtigung und Integration ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Frauenanteil am Beschäftigungsvolumen',
          subject: 'Gleichberechtigung und Integration ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Frauenanteil in der Exekutive (im Gemeinderat) ',
          subject: 'Gleichberechtigung und Integration ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Förderung von Begegnung und Integration ',
          subject: 'Gleichberechtigung und Integration ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Förderung von Begegnung und Integration ',
          subject: 'Gleichberechtigung und Integration ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Angebot kultureller Einrichtungen',
          subject: 'Freizeit-, Sport- und Kulturangebot',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Beschäftigte in der Kulturwirtschaft ',
          subject: 'Freizeit-, Sport- und Kulturangebot',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Anzahl Vereine  (pro 1000 Einwohner*innen) ',
          subject: 'Freizeit-, Sport- und Kulturangebot',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Diversität des Vereinsangebots',
          subject: 'Freizeit-, Sport- und Kulturangebot',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Qualität der ÖV-Erschliessung',
          subject: 'Mobilität/ Erreichbarkeit ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Erschliessung Bauzonen durch den ÖV',
          subject: 'Mobilität/ Erreichbarkeit ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Reisezeit zu nächstgelegenen Zentren (Strasse) ',
          subject: 'Mobilität/ Erreichbarkeit ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Jugenderwebslosigkeit',
          subject: 'Bildung',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Anteil Bevölkerung ohne nachobligatorische Ausbildung',
          subject: 'Bildung',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Reineinkommen (pro Einwohner*in)',
          subject: 'Einkommen und Lebenskosten',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'RDI-Indikator: verfügbares Einkommen',
          subject: 'Einkommen und Lebenskosten',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Steuerfuss',
          subject: 'Einkommen und Lebenskosten',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Erwerbsquote',
          subject: 'Beschäftigung (und Arbeitsplätze) ',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Arbeitslosigkeit',
          subject: 'Beschäftigung (und Arbeitsplätze) ',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Anzahl Arbeitsplätze und Arbeitsstätte (pro 1000 Einwohner*innen)',
          subject: 'Beschäftigung (und Arbeitsplätze) ',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Verfügbarkeit von Fachkräften',
          subject: 'Fachkräfte',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Verfügbarkeit von Hochqualifizierten',
          subject: 'Fachkräfte',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Unternehmensschliessungen',
          subject: 'Wirtschaftliche Resilienz',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Branchenvielfalt',
          subject: 'Wirtschaftliche Resilienz',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Neugründungen (Anzahl Arbeitsstätten und Arbeitsplätze)',
          subject: 'Innovation',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Patentanmeldungen',
          subject: 'Innovation',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Beschäftigte in wissensintensiven Branchen',
          subject: 'Innovation',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Wettbewerbsfähigkeit der Regionen (UBS) / Standortattraktität der Regionen (CS)',
          subject: 'Attraktivität für Unternehmen (Finanziell)',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Steuerrechtliche Attraktivität für juristische Personen',
          subject: 'Attraktivität für Unternehmen (Finanziell)',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        }
      ],
      fact_indicators: [
        {
          name: 'Energieverbrauch pro Einwohner*in',
          subject: 'Energie',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: '"Energiequalität (Anteil erneuerbare Energie und Fortschritte in diesem Bereich)',
          subject: 'Energie',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Luftschadstoffkonzentration',
          subject: 'Luft',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Trinkwasserqualität (Nitratgehalt im Trinkwasser)',
          subject: 'Wasser',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Grundwasserzustand (Nitratkonzentration und VOC im Grundwasser)',
          subject: 'Wasser',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Oberflächenwasserzustand (chemische Gewässerzustand anhand verschiedenenr Stoffe wie Phospht, Nitrati, Ammonium etc.)',
          subject: 'Wasser',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Wasserstress für Pflanzen / Wasserverfügbarkeit im Boden',
          subject: 'Wasser',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Bewirtschaftung Böden: Erosionsrisiko',
          subject: 'Boden',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Bodenqualität',
          subject: 'Boden',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Siedlungsabfall pro Einwohner*in ',
          subject: 'Nachhaltiger Konsum ',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Siedlungsfläche pro Kopf ',
          subject: 'Nachhaltiger Konsum ',
          sector: 'environment',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Einkauf- und Dienstleistungsangebot (Erreichbarkeit Lebensmittelgeschäfte, Restaurant, Cafes und allgemeines Angebot)',
          subject: 'Versorgung und Dienstleistung',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'medizinisches Angebot (Anzahl lokaler Angebote und Erreichbarkeit medizinischer Grundversorungseinrichtungen)',
          subject: 'Gesundheit',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Plätze in Pflegeheimen ',
          subject: 'Gesundheit',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Raumnutzerdichte',
          subject: 'Wohnangebot und Raumentwicklung ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Diversität Wohnangebot',
          subject: 'Wohnangebot und Raumentwicklung ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Baulandreserve',
          subject: 'Wohnangebot und Raumentwicklung ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Bevölkerungsanteil ausserhalb der Bauzone',
          subject: 'Wohnangebot und Raumentwicklung ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Wohnungsleerstand',
          subject: 'Wohnangebot und Raumentwicklung ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Bautätigkeit',
          subject: 'Wohnangebot und Raumentwicklung ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Strassenverkehrsunfälle mit Personenschaden (pro 1000 Einwohner*innen) ',
          subject: 'Sicherheit',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Anzahl Straftaten (pro 1000 Einwohner*innen) ',
          subject: 'Sicherheit',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Strassenverkehrsunfälle mit Personenschaden (pro 1000 Einwohner*innen) ',
          subject: 'Soziale Unterstützung und Solidariät',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Anzahl Straftaten (pro 1000 Einwohner*innen) ',
          subject: 'Soziale Unterstützung und Solidariät',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Sozialhilfequote',
          subject: 'Soziale Unterstützung und Solidariät',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Anzahl Vereine mit sozialem Zweck (pro 1000 Einwohner*innen)',
          subject: 'Soziale Unterstützung und Solidariät',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Einbürgerunsziffer ',
          subject: 'Gleichberechtigung und Integration ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Finanzielle Ungleichheit (Gini-Koeffizient) ',
          subject: 'Gleichberechtigung und Integration ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Frauenanteil am Beschäftigungsvolumen',
          subject: 'Gleichberechtigung und Integration ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Frauenanteil in der Exekutive (im Gemeinderat) ',
          subject: 'Gleichberechtigung und Integration ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Förderung von Begegnung und Integration ',
          subject: 'Gleichberechtigung und Integration ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Förderung von Begegnung und Integration ',
          subject: 'Gleichberechtigung und Integration ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Angebot kultureller Einrichtungen',
          subject: 'Freizeit-, Sport- und Kulturangebot',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Beschäftigte in der Kulturwirtschaft ',
          subject: 'Freizeit-, Sport- und Kulturangebot',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Anzahl Vereine  (pro 1000 Einwohner*innen) ',
          subject: 'Freizeit-, Sport- und Kulturangebot',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Diversität des Vereinsangebots',
          subject: 'Freizeit-, Sport- und Kulturangebot',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Qualität der ÖV-Erschliessung',
          subject: 'Mobilität/ Erreichbarkeit ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Erschliessung Bauzonen durch den ÖV',
          subject: 'Mobilität/ Erreichbarkeit ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Reisezeit zu nächstgelegenen Zentren (Strasse) ',
          subject: 'Mobilität/ Erreichbarkeit ',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Jugenderwebslosigkeit',
          subject: 'Bildung',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Anteil Bevölkerung ohne nachobligatorische Ausbildung',
          subject: 'Bildung',
          sector: 'social',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Reineinkommen (pro Einwohner*in)',
          subject: 'Einkommen und Lebenskosten',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'RDI-Indikator: verfügbares Einkommen',
          subject: 'Einkommen und Lebenskosten',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Steuerfuss',
          subject: 'Einkommen und Lebenskosten',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Erwerbsquote',
          subject: 'Beschäftigung (und Arbeitsplätze) ',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Arbeitslosigkeit',
          subject: 'Beschäftigung (und Arbeitsplätze) ',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Anzahl Arbeitsplätze und Arbeitsstätte (pro 1000 Einwohner*innen)',
          subject: 'Beschäftigung (und Arbeitsplätze) ',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Verfügbarkeit von Fachkräften',
          subject: 'Fachkräfte',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Verfügbarkeit von Hochqualifizierten',
          subject: 'Fachkräfte',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Unternehmensschliessungen',
          subject: 'Wirtschaftliche Resilienz',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Branchenvielfalt',
          subject: 'Wirtschaftliche Resilienz',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Neugründungen (Anzahl Arbeitsstätten und Arbeitsplätze)',
          subject: 'Innovation',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Patentanmeldungen',
          subject: 'Innovation',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Beschäftigte in wissensintensiven Branchen',
          subject: 'Innovation',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Wettbewerbsfähigkeit der Regionen (UBS) / Standortattraktität der Regionen (CS)',
          subject: 'Attraktivität für Unternehmen (Finanziell)',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        },
        {
          name: 'Steuerrechtliche Attraktivität für juristische Personen',
          subject: 'Attraktivität für Unternehmen (Finanziell)',
          sector: 'economy',
          value: Math.floor((Math.random() * 11))
        }
      ]
    }))
    console.log(modifiedData)

    const FileSystem = require('fs');
    FileSystem.writeFile('file.json', JSON.stringify(modifiedData), (err) => {
      if (err) throw err;
    })
  });
}

fetchAndEdit()
