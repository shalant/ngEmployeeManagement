import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl: string = 'https://randomuser.me/api'

  constructor(private http: HttpClient) { }

  // fetch users
  getUsers(size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?results=${size}`)
  }

  // fetch 1 user using the user UUID
  getUser(uuid: number = 1): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?uuid=${uuid}`)
  }

  private processResponse(response: Response): Response {
    return {
      info: { ...response.info },
      results: response.results.map((user: any) => (<User>{
        uuid: string;
        firstName: string;
        lastName: string;
        email: string;
        username: string;
        gender: string;
        address: string;
        dateOfBirth: string;
        phone: string;
        imageUrl: string;
        coordinate: Coordinate;
      })
    };
  }
}
