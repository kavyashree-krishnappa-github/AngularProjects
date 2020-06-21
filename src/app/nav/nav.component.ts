import {Component} from '@angular/core'
import { AuthService } from 'src/user/authentication.service';
import {UserLoginComponent} from 'src/user/user-login.component';
@Component ({
    selector:'nav-bar',
    templateUrl: './nav.component.html',
    styles:[
        `
        .nav.navbar-nav{font-size:15px;}
        #searchForm {margin-right:100px;}
        @media (max-width: 1200 px) {#searchForm{display:none}}
        li>a.active{color:orange;}
        `
    ]
})
export class NavBarComponent {
constructor(public authService:AuthService)
{

}
}