import { Component } from '@angular/core';
import {GithubService} from './services/github.service';
import { MainComponent } from "./components/Main/Main.component";


@Component({
    selector: 'my-app',
    template:
    `
      <main></main>
      <router-outlet></router-outlet>
    `,
    providers: [GithubService]
})
export class AppComponent {

    constructor() {
    }
}
