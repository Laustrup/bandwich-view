import {Gig, Request} from "@/models/Event";
import {ContactInfo} from "@/models/users/ContactInfo";
import {Rating} from "@/models/Rating";
import {Album} from "@/models/Album";
import {Subscription} from "@/models/users/Subscription";
import {User} from "@/models/users/User";
import {Bulletin, ChatRoom} from "@/models/Chats";

export class Performer extends User {

    public gigs: Gig[];

    public fans: User[];

    public runner: String;

    constructor(id: number, username: string, firstName: string, lastName: string,
                description: string, contactInfo: ContactInfo, ratings: Rating[], albums: Album[],
                chatRooms: ChatRoom[], subscription: Subscription, bulletins: Bulletin[], timestamp: Date,
                gigs: Gig[], fans: User[], runner: String) {
        super(id, username, firstName, lastName, description, contactInfo, ratings, albums, chatRooms, subscription, bulletins, timestamp);
        this.gigs = gigs;
        this.fans = fans;
        this.runner = runner;
    }
}

export class Artist extends Performer {

    public bands: Band[];

    public requests: Request[];


    constructor(id: number, username: string, firstName: string, lastName: string,
                description: string, contactInfo: ContactInfo, ratings: Rating[], albums: Album[],
                chatRooms: ChatRoom[], subscription: Subscription, bulletins: Bulletin[], timestamp: Date,
                gigs: Gig[], fans: User[], bands: Band[], runner: String, requests: Request[]) {
        super(id, username, firstName, lastName, description, contactInfo, ratings, albums, chatRooms, subscription, bulletins, timestamp, gigs, fans, runner);
        this.bands = bands;
        this.requests = requests;
    }
}

export class Band extends Performer {

    public members: Artist[];


    constructor(id: number, username: string, firstName: string, lastName: string, description: string,
                contactInfo: ContactInfo, ratings: Rating[], albums: Album[], chatRooms: ChatRoom[],
                subscription: Subscription, bulletins: Bulletin[], timestamp: Date, gigs: Gig[], fans: User[],
                runner: String, members: Artist[]) {
        super(id, username, firstName, lastName, description, contactInfo, ratings, albums, chatRooms, subscription, bulletins, timestamp, gigs, fans, runner);
        this.members = members;
    }
}