export class Post {
    id: number;
    title: string;
    body: string;
    description: string;
    active:boolean;
    type:string;

    constructor(id:number, title:string, body:string, description:string, active:boolean, type:string) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.description = description;
        this.active = active;
        this.type = type;
    }
}
