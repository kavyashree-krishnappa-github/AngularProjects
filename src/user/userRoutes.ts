import {Routes} from '@angular/router'
import { Component } from '@angular/core'
import { UserProfileComponent } from './user-profile.component'
import { UserLoginComponent } from './user-login.component'

export const userRoutes =[ 
    {path:'profile',component:UserProfileComponent},
    {path:'login',component:UserLoginComponent}

]