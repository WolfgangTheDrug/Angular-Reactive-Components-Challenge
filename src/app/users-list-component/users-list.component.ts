import {Component, inject} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {NgClass} from "@angular/common";
import {UsersListService} from "./users-list.service";
import {UserModel} from "./user.model";
import {SelectedUserService} from "./selected-user.service";

@Component({
  selector: 'users-list',
  standalone: true,
  imports: [RouterOutlet, NgClass],
  templateUrl: './users-list.component.html',
})

export class UsersListComponent {
  readonly usersListService: UsersListService = inject(UsersListService);
  readonly SelectedUserService: SelectedUserService = inject(SelectedUserService);

  toggleDetails( user: UserModel ) {
    if(this.SelectedUserService.userIsSelected === null || this.SelectedUserService.selectedUserId() !== user.id ){
      this.SelectedUserService.selectedUser.set( user );
    } else {
      this.SelectedUserService.selectedUser.set( null );
    }
  }
}
