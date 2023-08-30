import { User } from "@/models/users/User";

export class Rating {

    public id: number;

    public appointed: User;

    public judge: User;

    public value: number;

    constructor(id: number, appointed: User, judge: User, value: number, public comment?: string) {
        this.id = id;
        this.appointed = appointed;
        this.judge = judge;
        this.value = value;
    }
}