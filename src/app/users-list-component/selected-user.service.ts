import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {UserModel} from "./user.model";

@Injectable({ providedIn: 'root' })
export class SelectedUserService {
  selectedUser: WritableSignal<UserModel | null | undefined> = signal( undefined );
  userIsSelected: Signal<boolean> = computed( () => !!this.selectedUser() );
  selectedUserId: Signal<number | null | undefined> = computed( () => this.selectedUser()?.id );
}
