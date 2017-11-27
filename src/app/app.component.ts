import { Component } from '@angular/core';
import { QuoteInjectorService } from './quote-injector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private quoteInjectorService: QuoteInjectorService) {

  }
}
