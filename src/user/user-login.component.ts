import {Component} from '@angular/core'
import { AuthService } from './authentication.service'
import { Router } from '@angular/router'

@Component ({
    templateUrl:'./user-login.component.html',
    styles :[`
    em {color:red; font-size:10px; float:right;}`]
})
export class UserLoginComponent {
    userName
    password
    mouseoverLogin
constructor(private authService:AuthService,private router:Router){

}
login(values)
{
    this.authService.loginUser(values.userName,values.password)
    this.router.navigate(['events'])
}
cancel()
{    this.router.navigate(['events'])


}

}