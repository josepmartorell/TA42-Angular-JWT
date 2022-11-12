import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';

const apiUrl = 'https://fakerapi-rickmorty.herokuapp.com/characters'

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>(apiUrl);
  }

  get(id:any):Observable<any>{
    return this.http.get(`${apiUrl}/${id}`);
  }

  create(datos:any): Observable<any>{
    return this.http.post(apiUrl,datos);
  }

  update(id:any,datos:any):Observable<any>{
    return this.http.put(`${apiUrl}/${id}`,datos);
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${apiUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(apiUrl);
  }

  findByTitle(title: any): Observable<Character[]> {
    return this.http.get<Character[]>(`${apiUrl}?title=${title}`);
  }


}




