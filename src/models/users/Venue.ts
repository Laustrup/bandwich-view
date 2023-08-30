import {User} from "@/models/users/User";
import {Request} from "@/models/Event";
import {ContactInfo} from "@/models/users/ContactInfo";
import {Rating} from "@/models/Rating";
import {Album} from "@/models/Album";
import {Subscription} from "@/models/users/Subscription";
import {Bulletin, ChatRoom} from "@/models/Chats";

export class Venue extends User {

    public location: string;

    public gearDescription: string;

    public size: number;

    public requests: Request[];


    constructor(id: number, username: string, firstName: string, lastName: string, description: string,
                contactInfo: ContactInfo, ratings: Rating[], albums: Album[], chatRooms: ChatRoom[],
                subscription: Subscription, bulletins: Bulletin[], timestamp: Date, location: string,
                gearDescription: string, size: number, requests: Request[]) {
        super(id, username, firstName, lastName, description, contactInfo, ratings, albums, chatRooms, subscription, bulletins, timestamp);
        this.location = location;
        this.gearDescription = gearDescription;
        this.size = size;
        this.requests = requests;
    }
}