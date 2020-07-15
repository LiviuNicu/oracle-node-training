import { Component, OnInit } from '@angular/core';
import {MainService} from './../../services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user = { email:'', password:''}
  constructor(private mainService:MainService) { }

  ngOnInit(): void {
  }

  login(){
    this.mainService.login(this.user).subscribe((response)=>{
      console.log(response);
    })
  }

}
