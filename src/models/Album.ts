import {User} from "@/models/users/User";

export class Album {

    public id: number;

    public items: AlbumItem[];

    public author: User;

    constructor(id: number, items: AlbumItem[], author: User) {
        this.id = id;
        this.items = items;
        this.author = author;
    }
}

export class AlbumItem {

    public id: number;

    public tags: User[];

    public endpoint: string;

    public event: Event;

    public kind: AlbumKind;

    constructor(id: number, tags: User[], endpoint: string, event: Event, kind: AlbumKind) {
        this.id = id;
        this.tags = tags;
        this.endpoint = endpoint;
        this.event = event;
        this.kind = kind;
    }
}

export enum AlbumKind {
    IMAGE,
    MUSIC
}