import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlbumClass } from './albumclass';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  apiUrl: string = 'http://localhost:3000/photos';

  constructor(
    private http:HttpClient
  ) { }

  get(){
    return this.http.get<AlbumClass[]>(this.apiUrl);
  }

  post(photo:AlbumClass){
    return this.http.post<AlbumClass>(this.apiUrl,photo);
  }

  put(photo:AlbumClass){
    return this.http.put<AlbumClass>(this.apiUrl + '/' + photo.id, photo);
  }

  delete(id:number){
    return this.http.delete(this.apiUrl + '/' + id);
  }

}
