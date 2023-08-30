export class ContactInfo {

    public id: number;

    public phone?: Phone;

    public address?: Address;

    public country?: Country;


    constructor(id: number, phone?: Phone, address?: Address, country?: Country) {
        this.id = id;
        this.phone = phone;
        this.address = address;
        this.country = country;
    }
}

export class Phone {

    public country: Country;

    public numbers: number;

    public isMobile: boolean;

    constructor(country: Country, numbers: number, isMobile: boolean) {
        this.country = country;
        this.numbers = numbers;
        this.isMobile = isMobile;
    }
}

export class Address {

    public street: string;

    public floor: string;

    public postal: string;

    public city: string;

    constructor(street: string, floor: string, postal: string, city: string) {
        this.street = street;
        this.floor = floor;
        this.postal = postal;
        this.city = city;
    }
}

export class Country {

    public title: string;

    public indexes: CountryIndexes;

    public firstPhoneNumberDigits: number;


    constructor(title: string, indexes: CountryIndexes, firstPhoneNumberDigits: number) {
        this.title = title;
        this.indexes = indexes;
        this.firstPhoneNumberDigits = firstPhoneNumberDigits;
    }
}

export enum CountryIndexes {
    DK,
    SE,
    DE
}