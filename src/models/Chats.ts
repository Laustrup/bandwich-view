import {User} from "@/models/users/User";
import {Plato} from "@/models/Plato";

export class ChatRoom {

    public id: number;

    public mails: Mail[];

    public chatters: User[];

    public isAnswered: boolean;


    constructor(id: number, mails: Mail[], chatters: User[], isAnswered: boolean) {
        this.id = id;
        this.mails = mails;
        this.chatters = chatters;
        this.isAnswered = isAnswered;
    }
}

export class Message {

    public id: number;

    public author: User;

    public content: string;

    public isSent: boolean;

    public isEdited: Plato;

    public isPublic: boolean;

    constructor(id: number, author: User, content: string, isSent: boolean, isEdited: Plato, isPublic: boolean) {
        this.id = id;
        this.author = author;
        this.content = content;
        this.isSent = isSent;
        this.isEdited = isEdited;
        this.isPublic = isPublic;
    }
}

export class Mail extends Message {

    public chatRoom: ChatRoom;

    constructor(id: number, author: User, content: string, isSent: boolean, isEdited: Plato, isPublic: boolean, chatRoom: ChatRoom) {
        super(id, author, content, isSent, isEdited, isPublic);
        this.chatRoom = chatRoom;
    }
}

export class Bulletin extends Message {

    public receiver: User | Event;

    constructor(id: number, author: User, content: string, isSent: boolean, isEdited: Plato, isPublic: boolean, receiver: User | Event) {
        super(id, author, content, isSent, isEdited, isPublic);
        this.receiver = receiver;
    }
}