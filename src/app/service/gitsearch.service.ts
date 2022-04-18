// import { environment } from './environments/environment';
import {Promise} from 'es6-promise';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { HttpClient, } from '@angular/common/http';
import {  Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {

  private username:string;
  user:User;
  repos:Repository;
  reposArray:any;
  BaseUrl = "https://api.github.com/users/";
  FinalUrl ="?client_id=63803c21ae36ca102d8f&client_secret=035207e594845697a248822218ac167e7735bb0b";
  Api= "a746b62e5db077d41d84600a3fa6df484f1d8579"
  ;
  //3576b45f563f04b01adf

  //60e5ef73d9f320ef74f014cc95e54f323172e569
  //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

  constructor(private http: Http) {
    this.username = "abdi-ali33";
    this.user= new User ("","","",0,0,0,"");
    this.repos = new Repository("","","");
    this.reposArray = [];
  }

  userRequest(){
    interface ApiResponse{
      name:string;
      login:string;
      avatar_url:string;
      followers:number;
      following:number;
      public_repository:number;
      html_url:string;
    }

    let promise = new Promise((resolve,reject)=>{
      this.http.get(this.BaseUrl + this.username + this.FinalUrl).toPromise().then(response=>{
        this.user.name = response.json().name;
        this.user.login = response.json().login;
        this.user.avatar_url = response.json().avatar_url;
        this.user.followers = response.json().followers;
        this.user.following = response.json().following;
        this.user.public_repository = response.json().public_repos;
        this.user.html_url = response.json().html_url;
        resolve()
        console.log("one");
        console.log(this.user);
      },
      error=>{
        console.log("Error occured")
        reject(error);
      })
    })
    return Promise;
  }

  repositoryRequest(){
    this.reposArray = [];
    interface ApiResponse{
      name:string;
      html_url:string;
      description:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get(this.BaseUrl + this.username +"/repos" + this.FinalUrl).toPromise().then(response=> {
        for (let repository of response.json()) {
        this.repos.name = repository.name;
        this.repos.html_url = repository.html_url;
        this.repos.description = repository.description;
        this.repos = new Repository("","","");
        this.reposArray.push(this.repos);
          }
        resolve()
        console.log("two");
        console.log(response);
      },
      error=>{
        console.log("Error occured");
      })
    });
    return promise;
  }
  updateUser(username:string){
    this.username = username;
  }
}
