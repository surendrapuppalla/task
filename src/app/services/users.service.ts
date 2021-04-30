import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

public url = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  public getUserById(id: number): Observable<any>  {
    return this.http.get(`${this.url}/${id}`);
  }
}
