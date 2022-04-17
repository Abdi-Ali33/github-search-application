import { Component, OnInit } from '@angular/core';
import {GitsearchService} from '../service/gitsearch.service'
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import{ Repository } from '../repository';


@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css'],
  providers:[GitsearchService],
})

export class GitsearchComponent implements OnInit {
  user:User;
  repository:Repository;
  public username:string;
  reposArray:any[];
  

  constructor(private gitSearch:GitsearchService ) { }

  searchProfile(){
    this.gitSearch.updateUser(this.username);
    this.gitSearch.userRequest();
    this.gitSearch.repositoryRequest();
    this.reposArray = this.gitSearch.reposArray;
     }
  ngOnInit() {
    this.gitSearch.userRequest();
    this.user = this.gitSearch.user;

    this.gitSearch.repositoryRequest();
    this.reposArray = this.gitSearch.reposArray;
  }

}
