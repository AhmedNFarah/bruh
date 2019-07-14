import {Injectable} from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class GithubService {
  private username: string;
  private client_id = '7dd8f7ffa896f2860405';
  private client_secret = '4c5ea1f5e32408249fa05495d6bf3528a136587d';

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
