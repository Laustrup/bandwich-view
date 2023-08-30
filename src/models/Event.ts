import {Plato} from "@/models/Plato";
import {ContactInfo} from "@/models/users/ContactInfo";
import {Venue} from "@/models/users/Venue";
import {Album} from "@/models/Album";
import {Performer} from "@/models/users/Performers";
import {User} from "@/models/users/User";
import {Participant} from "@/models/users/Participant";
import {Bulletin} from "@/models/Chats";

export class Event {

    public id: number;

    public openDoors: Date;

    public start: Date;

    public end: Date;

    public length: number;

    public description: string;

    public isVoluntary: Plato;

    public isPublic: Plato;

    public isCancelled: Plato;

    public isSoldOut: Plato;

    public location: string;

    public price: number;

    public contactInfo: ContactInfo;

    public gigs: Gig[];

    public venue: Venue;

    public requests: Request[];

    public participations: Participation[];

    public bulletins: Bulletin[];

    public albums: Album[];


    constructor(id: number, openDoors: Date, start: Date, end: Date, length: number, description: string,
                isVoluntary: Plato, isPublic: Plato, isCancelled: Plato, isSoldOut: Plato, location: string,
                price: number, contactInfo: ContactInfo, gigs: Gig[], venue: Venue, requests: Request[],
                participations: Participation[], bulletins: Bulletin[], albums: Album[]) {
        this.id = id;
        this.openDoors = openDoors;
        this.start = start;
        this.end = end;
        this.length = length;
        this.description = description;
        this.isVoluntary = isVoluntary;
        this.isPublic = isPublic;
        this.isCancelled = isCancelled;
        this.isSoldOut = isSoldOut;
        this.location = location;
        this.price = price;
        this.contactInfo = contactInfo;
        this.gigs = gigs;
        this.venue = venue;
        this.requests = requests;
        this.participations = participations;
        this.bulletins = bulletins;
        this.albums = albums;
    }
}

export class Gig {

    public id: number;

    public event: Event;

    public acts: Performer[];

    public start: Date;

    public end: Date;

    public timestamp: Date;


    constructor(id: number, event: Event, acts: Performer[], start: Date, end: Date, timestamp?: Date) {
        this.id = id;
        this.event = event;
        this.acts = acts;
        this.start = start;
        this.end = end;
        this.timestamp = timestamp === undefined ? new Date() : timestamp;
    }
}

export class Request {

    public user: User;

    public event: Event;

    public approved: Plato;

    constructor(user: User, event: Event, approved: Plato, public message?: string) {
        this.user = user;
        this.event = event;
        this.approved = approved;
    }
}

export class Participation {

    public participant: Participant;

    public event: Event;

    public type: ParticipationType;

    constructor(participant: Participant, event: Event, type: ParticipationType) {
        this.participant = participant;
        this.event = event;
        this.type = type;
    }
}

export enum ParticipationType {
    ACCEPTED,
    IN_DOUBT,
    CANCELLED,
    INVITED
}