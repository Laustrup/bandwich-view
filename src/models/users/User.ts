import { ContactInfo } from "@/models/users/ContactInfo";
import { Album } from "@/models/Album";
import { Subscription } from "@/models/users/Subscription";
import {Rating} from "@/models/Rating";
import {Bulletin, ChatRoom} from "@/models/Chats";

export class User {

    public id: number;

    public username: string;

    public firstName: string;

    public lastName: string;

    public fullName: string;

    public description: string;

    public contactInfo: ContactInfo;

    public ratings: Rating[];

    public albums: Album[];

    public chatRooms: ChatRoom[];

    public subscription: Subscription;

    public bulletins: Bulletin[];

    public timestamp: Date;


    constructor(id: number, username: string, firstName: string, lastName: string,
                description: string,contactInfo: ContactInfo, ratings: Rating[], albums: Album[],
                chatRooms: ChatRoom[], subscription: Subscription, bulletins: Bulletin[], timestamp?: Date) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
        this.description = description;
        this.contactInfo = contactInfo;
        this.ratings = ratings;
        this.albums = albums;
        this.chatRooms = chatRooms;
        this.subscription = subscription;
        this.bulletins = bulletins;
        this.timestamp = timestamp === undefined ? new Date() : timestamp;
    }
}