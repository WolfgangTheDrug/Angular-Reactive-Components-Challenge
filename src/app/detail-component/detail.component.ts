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
  readonly SELECTED_USER_SERVICE: SelectedUserService = inject(SelectedUserService);

  setUserDetails() {
    const fullName: string = this.SELECTED_USER_SERVICE.userIsSelected
      ? `${ this.SELECTED_USER_SERVICE.selectedUser!.name.firstname } ${ this.SELECTED_USER_SERVICE.selectedUser!.name.lastname }`
      : '';
    const email: string = this.SELECTED_USER_SERVICE.userIsSelected
      ? this.SELECTED_USER_SERVICE.selectedUser!.email
      : '';

    return [fullName, email];
  }


  hideUser() {
    this.SELECTED_USER_SERVICE.setUser( null );
  }
}
