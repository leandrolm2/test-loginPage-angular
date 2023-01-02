import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorMensagens, SuccessMensagens } from 'src/app/handler/messagesRegister';
import { IUser } from 'src/app/_model/user';
import  {insertData}  from '../../_controller/insertData';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  username: string  = ""
  password: string = ""
  errorMessage:string = ""

  constructor(private router: Router) {}

  onInputUsername(value:string) {
    this.username = value
  }

  onInputPassword(value:string) {
    this.password = value
  }

  register() {
    const user:IUser = {
      username: this.username,
      password: this.password
    }

    insertData(user)
    .then((data: string) => {
      window.alert(data)
      this.router.navigate(['/login']);
    })
    .catch((error: string)=> {
      if(error === ErrorMensagens[401]) {
        window.alert(`error 401, ${error}`);
        this.router.navigate(['/register']);
      } else {
        window.alert(`error: 403, ${error}`);
        this.router.navigate(['/register']);
      }
    });
  }
}
