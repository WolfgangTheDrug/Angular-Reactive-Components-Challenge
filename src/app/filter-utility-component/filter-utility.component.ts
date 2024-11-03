import {Component, inject} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {NgClass} from "@angular/common";
import {DetailComponent} from "../detail-component/detail.component";
import {UsersListService} from "../users-list-component/users-list.service";

type SortOrder = 'asc' | 'desc';
type SortBy = 'email' | 'lastName';

@Component({
  selector: 'filter-utility',
  standalone: true,
  imports: [RouterOutlet, NgClass, DetailComponent],
  templateUrl: './filter-utility.component.html'
})

export class FilterUtilityComponent {
  readonly usersListService: UsersListService = inject(UsersListService);

  setSortOption( option: SortBy | SortOrder ): void {
    this.usersListService.sortOptions.update( opt => {
      return option === 'email' || option === 'lastName'
        ? { ...opt, sortBy: option }
        : { ...opt, sortOrder: option };
    });
  }
}
