import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './authentication.service';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from 'src/common/toastr.service';
import { INJECTOR } from '@angular/core/src/render3/interfaces/view';
import {Inject} from '@angular/core';


@Component({
    templateUrl:'./user-profile.component.html',
    styles:[`
    em {color:red; font-size:10px;float:right;}
    .error input{background:#E05C65;}
    `]
})

export class UserProfileComponent implements OnInit{
    profileForm:FormGroup
    
    constructor(private authService:AuthService, private router:Router,@Inject(TOASTR_TOKEN) private toastr:Toastr)
    {

    }
    ngOnInit()
    {
    let firstName= new FormControl(this.authService.currentUser.firstName, [Validators.required,Validators.pattern('[a-zA-Z].*')])
    let lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({firstName:firstName,lastName:lastName});
    }
saveProfile(profileFormValues)
{

if(this.profileForm.valid)
{    this.authService.updateProfile(profileFormValues.firstName,profileFormValues.lastName);
    this.toastr.success("successfully logged in!");

}
// this.router.navigate(['\events']);

}
isValidFirstName()
{
    return this.profileForm.controls.firstName.invalid &&this.profileForm.controls.firstName.touched;
}

}