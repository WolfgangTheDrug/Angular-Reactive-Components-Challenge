import {computed, inject, Injectable, signal, Signal, WritableSignal} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "./user.model";
import {toSignal} from "@angular/core/rxjs-interop";

type SortOptions = {
  sortBy: 'email' | 'lastName',
  sortOrder: 'asc' | 'desc'
}

@Injectable({providedIn: 'root'})
export class UsersListService {
  private readonly apiUrl: string = 'https://fakestoreapi.com/users';
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly defaultSortOptions: SortOptions = { sortBy: 'email', sortOrder: 'asc' };
  readonly sortOptions: WritableSignal<SortOptions> = signal( this.defaultSortOptions );

  getAll(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(this.apiUrl)
  }

  readonly users: Signal<UserModel[]> = toSignal(
    this.getAll(),
    {initialValue: []}
  )
  readonly usersView: Signal<UserModel[]> = computed(() => {
    return this.users().sort((a: UserModel, b: UserModel) => {
      if ( this.sortOptions().sortBy === 'email' ) {
        if ( this.sortOptions().sortOrder === 'asc' ) {
          // emails asc
          return a.email.localeCompare(b.email);
        }
        // emails desc
        return b.email.localeCompare(a.email);
      }
      if ( this.sortOptions().sortOrder === 'asc' ) {
        // lastName asc
        return a.name.lastname.localeCompare(b.name.lastname);
      }
      // lastName desc
      return b.name.lastname.localeCompare(a.name.lastname);
    });
  });
}
