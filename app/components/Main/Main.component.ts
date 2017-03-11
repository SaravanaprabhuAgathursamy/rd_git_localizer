import { Component } from '@angular/core';
import {GithubService} from '../../services/github.service';
import 'rxjs/add/operator/map';


@Component({
    selector: 'main',
    templateUrl: 'components/Main/Main.component.html',
    styleUrls: ['components/Main/Main.component.css']
})
export class MainComponent {

    constructor(private _githubService: GithubService) {
      this._githubService.getUser().subscribe(user => {
        console.log(user);
      })
    }
}
