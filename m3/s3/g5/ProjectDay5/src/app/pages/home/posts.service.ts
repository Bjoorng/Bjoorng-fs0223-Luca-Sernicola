import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from './ipost';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  api = environment.apiPosts;

  constructor(
    private http:HttpClient
  ) { }

  getAll(){
    return this.http.get<IPost[]>(this.api);
  }

  getOne(id:number){
    return this.http.get<IPost>(`${this.api}/${id}`);
  }

  post(data:IPost){
    return this.http.post<IPost>(`${this.api}`,data);
  }

  put(data:Partial<IPost>){
    return this.http.put<IPost>(`${this.api}/${data.id}`,data);
  }

  delete(id:number=0){
    return this.http.delete<IPost>(`${this.api}/${id}`);
  }
}
