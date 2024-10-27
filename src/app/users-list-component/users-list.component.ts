import {Component, computed, inject, Signal} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {NgClass} from "@angular/common";
import {UsersListService} from "./users-list.service";
import {UserModel} from "./user.model";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'users-list',
  standalone: true,
  imports: [RouterOutlet, NgClass],
  templateUrl: './users-list.component.html',
})

export class UsersListComponent {
  readonly USERS_LIST_SERVICE: UsersListService = inject(UsersListService);
  readonly USERS: Signal<UserModel[]> = toSignal(
    this.USERS_LIST_SERVICE.getAll(),
    {initialValue: []}
  )

  readonly VISIBLE_USERS: Signal<UserModel[]> = computed(() => {
    return this.USERS()
  });

  sortOrder(): string {
    return 'desc';
  }
}
