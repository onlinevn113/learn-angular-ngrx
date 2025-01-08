import { Component } from '@angular/core';
import { environment} from "../../../environments/environment";

@Component({
  selector: 'order-food-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  protected readonly environment = environment;
}
