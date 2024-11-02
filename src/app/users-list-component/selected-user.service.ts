import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {UserModel} from "./user.model";

@Injectable({ providedIn: 'root' })
export class SelectedUserService {
  selectedUser: WritableSignal<UserModel | null | undefined> = signal( undefined );
  userIsSelected: Signal<boolean> = computed( () => !!this.selectedUser() );
  selectedUserId: Signal<number | null | undefined> = computed( () => this.selectedUser()?.id );
  // selectedUser: UserModel | null = null;
  // userIsSelected: boolean = false;
  // selectedUsersId: number | null = null;
  //
  // setUser(user: UserModel | null) {
  //   this.selectedUser = user;
  //   this.userIsSelected = !!this.selectedUser;
  //   this.selectedUsersId = this.userIsSelected ?  user!.id : null;
  // }
  //
  // getUser(): UserModel | null {
  //   return this.selectedUser;
  // }
}
