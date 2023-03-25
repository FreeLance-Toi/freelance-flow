class Address {
  private readonly _streetNumber: number
  private readonly _street: string
  private readonly _complement: string
  private readonly _city: string
  private readonly _zipCode: string
  private readonly _country: string

  constructor (streetNumber: number, street: string, complement: string, city: string, zipCode: string, country: string) {
    this._streetNumber = streetNumber
    this._street = street
    this._complement = complement
    this._city = city
    this._zipCode = zipCode
    this._country = country
  }

  get streetNumber (): number {
    return this._streetNumber
  }

  get street (): string {
    return this._street
  }

  get complement (): string {
    return this._complement
  }

  get city (): string {
    return this._city
  }

  get zipCode (): string {
    return this._zipCode
  }

  get country (): string {
    return this._country
  }
}

module.exports = Address
