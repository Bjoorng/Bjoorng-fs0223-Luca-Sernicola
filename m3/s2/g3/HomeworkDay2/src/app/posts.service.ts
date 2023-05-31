import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  postsArray: Post[] = [
    {
        "id":1,
        "body":"Chi fa cuocere la pasta per il tempo indicato sulla confezione merita la forca.",
        "title":"Cospicui colabrodi.",
        "description":"Letteralmente parole a caso per cospicua mancanza di fantasia",
        "active":true,
        "type":"politics"
    },
    {
        "id":2,
        "body":"Chi fa cuocere la pasta per il tempo indicato sulla confezione merita la forca.",
        "title":"Cospicui colabrodi.",
        "description":"Letteralmente parole a caso per cospicua mancanza di fantasia",
        "active":true,
        "type":"politics"
    },
    {
        "id":3,
        "body":"Chi fa cuocere la pasta per il tempo indicato sulla confezione merita la forca.",
        "title":"Cospicui colabrodi.",
        "description":"Letteralmente parole a caso per cospicua mancanza di fantasia",
        "active":true,
        "type":"politics"
    },
    {
        "id":4,
        "body":"Chi fa cuocere la pasta per il tempo indicato sulla confezione merita la forca.",
        "title":"Cospicui colabrodi.",
        "description":"Letteralmente parole a caso per cospicua mancanza di fantasia",
        "active":true,
        "type":"politics"
    },
    {
        "id":5,
        "body":"Chi fa cuocere la pasta per il tempo indicato sulla confezione merita la forca.",
        "title":"Cospicui colabrodi.",
        "description":"Letteralmente parole a caso per cospicua mancanza di fantasia",
        "active":true,
        "type":"politics"
    },
    {
        "id":6,
        "body":"Saltimbanchi troppo noiosi portano a salamandre frustrate.",
        "title":"Catamarani a reazione.",
        "description":"Letteralmente parole a caso per cospicua mancanza di fantasia",
        "active":false,
        "type":"news"
    },
    {
        "id":7,
        "body":"Saltimbanchi troppo noiosi portano a salamandre frustrate.",
        "title":"Catamarani a reazione.",
        "description":"Letteralmente parole a caso per cospicua mancanza di fantasia",
        "active":false,
        "type":"news"
    },
    {
        "id":8,
        "body":"Saltimbanchi troppo noiosi portano a salamandre frustrate.",
        "title":"Catamarani a reazione.",
        "description":"Letteralmente parole a caso per cospicua mancanza di fantasia",
        "active":false,
        "type":"news"
    },
    {
        "id":9,
        "body":"Saltimbanchi troppo noiosi portano a salamandre frustrate.",
        "title":"Catamarani a reazione.",
        "description":"Letteralmente parole a caso per cospicua mancanza di fantasia",
        "active":false,
        "type":"news"
    },
    {
        "id":10,
        "body":"Saltimbanchi troppo noiosi portano a salamandre frustrate.",
        "title":"Catamarani a reazione.",
        "description":"Letteralmente parole a caso per cospicua mancanza di fantasia",
        "active":false,
        "type":"news"
    },
    {
        "id":11,
        "body":"Saltimbanchi troppo noiosi portano a salamandre frustrate.",
        "title":"Catamarani a reazione.",
        "description":"Letteralmente parole a caso per cospicua mancanza di fantasia",
        "active":false,
        "type":"education"
    },
    {
        "id":12,
        "body":"Saltimbanchi troppo noiosi portano a salamandre frustrate.",
        "title":"Catamarani a reazione.",
        "description":"Letteralmente parole a caso per cospicua mancanza di fantasia",
        "active":false,
        "type":"education"
    },
    {
        "id":13,
        "body":"Saltimbanchi troppo noiosi portano a salamandre frustrate.",
        "title":"Catamarani a reazione.",
        "description":"Letteralmente parole a caso per cospicua mancanza di fantasia",
        "active":false,
        "type":"education"
    },
    {
        "id":14,
        "body":"Saltimbanchi troppo noiosi portano a salamandre frustrate.",
        "title":"Catamarani a reazione.",
        "description":"Letteralmente parole a caso per cospicua mancanza di fantasia",
        "active":false,
        "type":"education"
    },
    {
        "id":15,
        "body":"Saltimbanchi troppo noiosi portano a salamandre frustrate.",
        "title":"Catamarani a reazione.",
        "description":"Letteralmente parole a caso per cospicua mancanza di fantasia",
        "active":false,
        "type":"education"
    }
]

getPostsArray(){
  return this.postsArray;
}
}
