import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'detail',
  standalone: true,
  imports: [RouterOutlet, NgClass],
  templateUrl: './detail.component.html',
})

export class DetailComponent {
  name: string = '';
  email: string = '';

  hide() {

  }
}
