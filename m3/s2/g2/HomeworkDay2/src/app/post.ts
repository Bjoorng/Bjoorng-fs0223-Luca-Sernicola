export class Post {
    id: number;
    title: string;
    body: string;
    description: string;
    active:boolean;

    constructor(id:number, title:string, body:string, description:string, active:boolean) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.description = description;
        this.active = active;
    }
}