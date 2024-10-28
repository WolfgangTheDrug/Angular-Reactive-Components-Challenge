import {Component, computed, EventEmitter, inject, Input, Output, Signal} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {NgClass} from "@angular/common";
import {UsersListService} from "./users-list.service";
import {UserModel} from "./user.model";
import {toSignal} from "@angular/core/rxjs-interop";
import {SelectedUserService} from "./selected-user.service";

@Component({
  selector: 'users-list',
  standalone: true,
  imports: [RouterOutlet, NgClass],
  templateUrl: './users-list.component.html',
})

export class UsersListComponent {
  readonly USERS_LIST_SERVICE: UsersListService = inject(UsersListService);
  readonly SELECTED_USER_SERVICE: SelectedUserService = inject(SelectedUserService);
  readonly USERS: Signal<UserModel[]> = toSignal(
    this.USERS_LIST_SERVICE.getAll(),
    {initialValue: []}
  )

  toggleDetails( user: UserModel ) {
    if(this.SELECTED_USER_SERVICE.userIsSelected === null || this.SELECTED_USER_SERVICE.selectedUsersId !== user.id ){
      this.SELECTED_USER_SERVICE.setUser( user );
    } else {
      this.SELECTED_USER_SERVICE.setUser( null );
    }
  }

  readonly VISIBLE_USERS: Signal<UserModel[]> = computed(() => {
    return this.USERS()
  });

  sortOrder(): string {
    return 'desc';
  }


}
