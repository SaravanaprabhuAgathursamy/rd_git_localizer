import { Component } from '@angular/core';
import {GithubService} from './services/github.service';


@Component({
    selector: 'my-app',
    template:
    `
      <router-outlet></router-outlet>
    `,
    providers: [GithubService]
})
export class AppComponent {

    constructor() {
    }
}
