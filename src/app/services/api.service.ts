import { HttpClient,HttpResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,throwError,Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUser(githubUsername: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`).pipe(
    catchError((error) => {
      return throwError(() => new Error(error.error.message))
    })
  );
  }
  getRepos(githubUsername: string,page:number,items_per_page:number): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos?per_page=${items_per_page}&page=${page}`).pipe(
    catchError((error) => {
      return throwError(() => new Error(error.error.message))
    })
  );
      
     
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
