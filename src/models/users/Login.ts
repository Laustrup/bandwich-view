export class Login {

    public username: string;

    public password: string;

    public timestamp: Date;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
        this.timestamp = new Date();
    }
}