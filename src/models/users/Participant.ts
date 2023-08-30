import {User} from "@/models/users/User";
import {ContactInfo} from "@/models/users/ContactInfo";
import {Rating} from "@/models/Rating";
import {Album} from "@/models/Album";
import {Subscription} from "@/models/users/Subscription";
import {Bulletin, ChatRoom} from "@/models/Chats";

export class Participant extends User {

    public idols: User;


    constructor(id: number, username: string, firstName: string, lastName: string, description: string,
                contactInfo: ContactInfo, ratings: Rating[], albums: Album[], chatRooms: ChatRoom[],
                subscription: Subscription, bulletins: Bulletin[], timestamp: Date, idols: User) {
        super(id, username, firstName, lastName, description, contactInfo, ratings, albums, chatRooms, subscription, bulletins, timestamp);
        this.idols = idols;
    }
}