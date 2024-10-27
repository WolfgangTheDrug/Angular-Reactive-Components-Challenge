import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgClass} from "@angular/common";
import {DetailComponent} from "./detail-component/detail.component";
import {FilterUtilityComponent} from "./filter-utility-component/filter-utility.component";
import {UsersListComponent} from "./users-list-component/users-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, DetailComponent, FilterUtilityComponent, UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}