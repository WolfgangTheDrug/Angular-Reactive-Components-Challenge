import {Component, inject} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {NgClass} from "@angular/common";
import {SelectedUserService} from "../users-list-component/selected-user.service";

@Component({
  selector: 'detail',
  standalone: true,
  imports: [RouterOutlet, NgClass],
  templateUrl: './detail.component.html',
})

export class DetailComponent {
  readonly selectedUserService: SelectedUserService = inject(SelectedUserService);

  setUserDetails() {
    const fullName: string = this.selectedUserService.userIsSelected()
      ? `${ this.selectedUserService.selectedUser()!.name.firstname } ${ this.selectedUserService.selectedUser()!.name.lastname }`
      : '';
    const email: string = this.selectedUserService.userIsSelected()
      ? this.selectedUserService.selectedUser()!.email
      : '';

    return [fullName, email];
  }


  hideUser() {
    this.selectedUserService.selectedUser.set( null );
  }
}
