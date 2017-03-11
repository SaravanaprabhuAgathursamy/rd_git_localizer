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

    constructor(private _githubService: GithubService) {
      this._githubService.getUser().subscribe(user => {
        this.user = user;
        console.log(user);
      })
      this._githubService.getRepos().subscribe(repos => {
        this.repos = repos;
        console.log(repos);
      })
    }

    searchUser(){
      console.log("Hello World!")
    }
}
