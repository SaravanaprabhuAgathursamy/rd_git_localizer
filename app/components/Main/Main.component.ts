import { Component } from '@angular/core';
import {GithubService} from '../../services/github.service';
import 'rxjs/add/operator/map';


@Component({
    selector: 'main',
    templateUrl: 'components/Main/Main.component.html',
    styleUrls: ['components/Main/Main.component.css']
})
export class MainComponent {
    username: string;
    avatar: string;
    html_url: string;
    user: any;

    constructor(private _githubService: GithubService) {
      this._githubService.getUser().subscribe(user => {
        this.username = user.name;
        this.avatar = user.avatar_url;
        this.html_url = user.html_url;
        this.user = user;
        console.log(user);
      })
    }
}
