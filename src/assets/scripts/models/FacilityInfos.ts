class FacilityInfos {
  private readonly _siret: string
  private readonly _firstNames: string[]
  private readonly _lastName: string
  private readonly _companyName: string
  private readonly _address: Address

  constructor (siret: string, firstNames: string[], lastName: string, companyName: string, address: Address) {
    this._siret = siret
    this._firstNames = firstNames
    this._lastName = lastName
    this._companyName = companyName
    this._address = address
  }

  get siret (): string {
    return this._siret
  }

  get firstNames (): string[] {
    return this._firstNames
  }

  get lastName (): string {
    return this._lastName
  }

  get companyName (): string {
    return this._companyName
  }

  get address (): Address {
    return this._address
  }
}

module.exports = FacilityInfos
