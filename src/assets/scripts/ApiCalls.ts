/* eslint-disable curly */
/* eslint-disable @typescript-eslint/no-var-requires */

import axios from 'axios'
const Address = require('./models/Address')
const FacilityInfos = require('./models/FacilityInfos')

async function sirInfos (sir: string) {
  sir = sir.replaceAll(' ', '')
  console.log(sir)
  let siren = sir
  if (sir.length === 14) // SIREN
    siren = sir.substring(0, 9)
  const request = await axios.get(`https://data.siren-api.fr/v3/unites_legales/${siren}`)
  if (request.status !== 200)
    return null
  const data = request.data.unite_legale
  const siret = data.etablissement_siege.siret
  const firstNames = [data.prenom_usuel, data.prenom_2, data.prenom_3, data.prenom_4]
  const lastName = data.nom
  const companyName = data.etablissement_siege.denomination_usuelle
  if (lastName === null)
    return null
  // Address
  const number = data.etablissement_siege.numero_voie
  const address = data.etablissement_siege.type_voie + ' ' + data.etablissement_siege.libelle_voie
  const complement = data.etablissement_siege.complement_adresse
  const zipCode = data.etablissement_siege.code_postal
  const city = data.etablissement_siege.libelle_commune
  // Country not provided by API
  const fullAddress = new Address(number, address, complement, city, zipCode, 'FRANCE')
  return new FacilityInfos(siret, firstNames, lastName, companyName, fullAddress)
}

async function currencyConverter (value: number, from: string, to: string) {
  from = from.toUpperCase()
  to = to.toUpperCase()
  const data = (await axios.get('https://open.er-api.com/v6/latest/EUR')).data
  if (from === 'EUR')
    return value * data.rates[to]
  else if (to === 'EUR')
    return value / data.rates[from]
  else
    return value * data.rates[to] / data.rates[from]
}

export { sirInfos, currencyConverter }
