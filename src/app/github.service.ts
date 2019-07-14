import {Injectable} from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class GithubService {
  private username: string;
  private client_id = 'b1b8df32b10c51993119';
  private client_secret = '241aeea65e618775eae9ea2d24a9fb03fa6861a3';

  constructor(private _http: HttpClient) {
    console.log('github service ready...');
    this.username = 'predatorkill';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .pipe(map(res => {}));
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .pipe(map(res => {}));
  }

  updateUser(username: string) {
    this.username = username;
  }


}
