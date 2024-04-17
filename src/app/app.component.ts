import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

interface Repository {
  name: string;
  topics:[];
  description:string;
  created_at:string,
  stargazers_count:number
}
interface User {
  name:string,
  bio:string,
  avatar_url:string,
  url:string,
  location:string,
  followers:number,
  following:number,
  public_repos:number

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
   page:number=1
   totalItems:number = 1
   repos:Repository[] =  []
   user: User = {
     name: '',
     bio: '',
     avatar_url: '',
     url: '',
     location:'',
     followers:0,
     following:0,
     public_repos:0
   }
  items_per_page:number = 10
  title = 'fyle-frontend-challenge';
  contentLoaded:boolean = false; 
  userLoaded:boolean = false;
  userName:string = ""
  errorMessage:string = ""
  constructor(
    private apiService: ApiService
  ) {}
  ngOnInit(): void {
  }
  getData(query:string) {
    this.repos = []
    this.errorMessage = ""
    this.page = 0;
    this.userName = query;
    this.apiService.getUser(query).subscribe({
    next: (data) => {
      console.log(data)
      this.user = data;
      this.totalItems = data.public_repos
      this.userLoaded = true;
  },
  error: (error) => {
       this.errorMessage = error
     },
    });
    this.gty(this.page,this.items_per_page)
  }
  gty(page: number,items_per_page: number){
    this.page = page;
    if(items_per_page>100) {
      alert("Sorry! Cannot show more than 100 repos per page");
      return
    }
    this.contentLoaded = false;
    this.apiService.getRepos(this.userName,page,items_per_page).subscribe({
     next: (data) =>{ 
      this.repos = data
      },
    error: (e) =>this.errorMessage = e,
    complete: () =>this.contentLoaded = true 
     })
  }

}
