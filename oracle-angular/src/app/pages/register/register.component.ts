import { Component, OnInit } from '@angular/core';
import {MainService} from './../../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user = {email:'',firstName:'',lastName:'',password:''}
  constructor(private mainService:MainService, private router:Router) { }

  ngOnInit(): void {
  }
register(){
  this.mainService.register(this.user).subscribe((response)=>{
    console.log(response);
    this.router.navigate(['login']);
  })
}
}
