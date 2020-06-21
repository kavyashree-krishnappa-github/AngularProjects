import {NgModule} from '@angular/core'
import { UserProfileComponent } from './user-profile.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  RouterModule } from '@angular/router';
import { userRoutes } from './userRoutes';
import {UserLoginComponent} from './user-login.component';  

@NgModule({
imports: [CommonModule,RouterModule.forChild(userRoutes),FormsModule, ReactiveFormsModule],
declarations:[UserProfileComponent,UserLoginComponent],
providers:[]
})
export class UserModule{

}