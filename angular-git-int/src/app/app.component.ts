import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TokenDemoComponent } from './token-demo/token-demo.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, TokenDemoComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-git-int';
}
