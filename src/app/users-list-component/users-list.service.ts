import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "./user.model";
import {UserDTOModel} from "./user-DTO";

@Injectable({providedIn: 'root'})
export class UsersListService {
  private readonly API_URL: string = 'https://fakestoreapi.com/users';
  private readonly HTTP_CLIENT: HttpClient = inject(HttpClient);


  getAll(): Observable<UserModel[]> {
    return this.HTTP_CLIENT.get<UserModel[]>(this.API_URL)
  }
}
