import { User } from "@/models/users/User";

export class Subscription {

    public user: User;

    public type: SubscriptionType;

    public status: SubscriptionStatus;

    public price: number;

    public offer: SubscriptionOffer;

    public cardId?: number;


    constructor(user: User, type: SubscriptionType, status: SubscriptionStatus, price: number, offer: SubscriptionOffer, cardId?: number) {
        this.user = user;
        this.type = type;
        this.status = status;
        this.price = price;
        this.offer = offer;
        this.cardId = cardId;
    }
}

export enum SubscriptionType {
    FREEMIUM,
    PREEMIUM_BAND,
    PREEMIUM_ARTIST
}

export enum SubscriptionStatus {
    ACCEPTED,
    BLOCKED,
    DISACTIVATED,
    CLOSED
}

export class SubscriptionOffer {

    public expires: Date;

    public type: SubscriptionOfferType;

    public effect: number;

    constructor(expires: Date, type: SubscriptionOfferType, effect: number) {
        this.expires = expires;
        this.type = type;
        this.effect = effect;
    }
}

export enum SubscriptionOfferType {
    FREE_TRIAL,
    SALE
}