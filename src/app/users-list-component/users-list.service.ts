import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "./user.model";

@Injectable({providedIn: 'root'})
export class UsersListService {
  private readonly apiUrl: string = 'https://fakestoreapi.com/users';
  private readonly httpClient: HttpClient = inject(HttpClient);


  getAll(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(this.apiUrl)
  }
}
