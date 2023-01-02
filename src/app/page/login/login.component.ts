import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jsonData from "../../database/dataUser"
import { IUser } from '../../_model/user';
import { getUser } from 'src/app/_controller/getData';
import { ErrorMensagens } from 'src/app/handler/messageLogin';

@Component({

    selector:'app-login',

    templateUrl:'./login.component.html',

    styleUrls: ['./login.component.css'],

})

export class LoginComponent {
  username: string = ''
  password: string = ''
  userPayloader = jsonData
  errorMessage: string = '' 
  constructor(private router: Router){}

  onInputUsername(value: string) {
    this.username = value;
  }

  onInputPassword(value: string) {
    this.password = value;
  }

  login() {
    let userPayloader: IUser = {
      username: this.username,
      password: this.password
    }
    getUser(userPayloader).then(() => {
      this.router.navigate(['/home']);
    })
    .catch((error)=> {
      if(error === ErrorMensagens[401]) {
        window.alert(`error 401, ${error}`)
        this.router.navigate(['/login']);
      } else {
        window.alert(`error: 404, ${error}`)
        this.router.navigate(['/login']);
      }
    });
  }
}
