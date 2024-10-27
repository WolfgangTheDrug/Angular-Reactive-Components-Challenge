import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {NgClass} from "@angular/common";
import {DetailComponent} from "../detail-component/detail.component";

@Component({
  selector: 'filter-utility',
  standalone: true,
  imports: [RouterOutlet, NgClass, DetailComponent],
  templateUrl: './filter-utility.component.html'
})

export class FilterUtilityComponent {
  sort(asc: string) {}

  sortOrder(): string {
    return 'desc';
  }
}
