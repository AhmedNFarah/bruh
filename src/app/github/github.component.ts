import {Component} from '@angular/core';
import {GithubFormComponent} from '../github-form/github-form.component';
import {GithubService} from '../github.service';
import { Users } from '../users';
import { Github } from '../github';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent {
  user: Users;
  repos: Github;
  username: string;


  constructor(private _githubService: GithubService) {

  }

  searchUser() {
    this._githubService.updateUser(this.username);

    this._githubService.getUser()
      .subscribe(user => {
        this.user = user;
      });

    this._githubService.getRepos()
      .subscribe(repos => {
        this.repos = repos;
      });
  }

}
