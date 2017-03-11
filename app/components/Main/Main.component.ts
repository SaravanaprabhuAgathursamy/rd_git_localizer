import { Component } from '@angular/core';
import {GithubService} from '../../services/github.service';
import 'rxjs/add/operator/map';


@Component({
    selector: 'main',
    templateUrl: 'components/Main/Main.component.html',
    styleUrls: ['components/Main/Main.component.css']
})
export class MainComponent {
    user: any;
    repos: any;
    username: string;

    constructor(private _githubService: GithubService) {
      this.user = false;
    }

    searchUser(){
      this._githubService.updateUser(this.username);

      this._githubService.getUser().subscribe(user => {
        this.user = user;
      })
      this._githubService.getRepos().subscribe(repos => {
        this.repos = repos;
      })

    }


}
