import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
// Map observable resopnse
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;
  private clientID = "9fbe29042faa415eb297";
  private clientSecret = "394fecbaf029a516adbd4cc6ee783f602a08b01c";

  constructor(private _http:Http){
    console.log('GitHub Service Ready');
    this.username = "";
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.clientID+'&client_secret='+this.clientSecret)
            .map(res => res.json())
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.clientID+'&client_secret='+this.clientSecret)
            .map(res => res.json())
  }

  updateUser(username:string){
    this.username = username
  }

}
