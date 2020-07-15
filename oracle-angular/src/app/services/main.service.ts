import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
}

const httpPrivateOptions = {
  headers: new HttpHeaders({'Content-type':'application/json', 'Authorization':localStorage.getItem('token')})
}

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public url= 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  login(userObj){
    return this.http.post(this.url+'/api/login',userObj,httpOptions)
    .pipe(
      tap((response)=>this.log(response)),
      catchError(this.handleError('login'))
      );
  }

  register(userObj){
    return this.http.post(this.url+'/api/register',userObj,httpOptions)
    .pipe(
      tap((response)=>this.log(response)),
      catchError(this.handleError('register'))
      );
  }

  getAllUsers(userObj){
    return this.http.post(this.url+'/api/allUsers',userObj,httpPrivateOptions)
    .pipe(
      tap((response)=>this.log(response)),
      catchError(this.handleError('getAllUsers'))
      );
  }
  



  private log(message){
    console.log(message);
  }

  private handleError<T>(operation = 'operation',result?:T){
    return (error:any):Observable<T> =>{
      console.log(error);
      return of(result as T);
    };
  }
}
