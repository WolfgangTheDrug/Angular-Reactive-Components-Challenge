import { Injectable } from '@angular/core';
import {UserModel} from "./user.model";

@Injectable({ providedIn: 'root' })
export class SelectedUserService {
  selectedUser: UserModel | null = null;
  userIsSelected: boolean = false;
  selectedUsersId: number | null = null;

  setUser(user: UserModel | null) {
    this.selectedUser = user;
    this.userIsSelected = !!this.selectedUser;
    this.selectedUsersId = this.userIsSelected ?  user!.id : null;
  }

  getUser(): UserModel | null {
    return this.selectedUser;
  }
}
