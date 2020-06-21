import { Injectable } from "@angular/core";
import { IUser } from './user.model';

@Injectable()
export class AuthService{
currentUser:IUser
loginUser(userName:string,password:string){
this.currentUser = {
    id: 1,
    firstName: 'Kavya',
    lastName: 'Krishnappa',
    userName: 'kavya91shree'
}

}
isAuthenticated()
{
    return !!this.currentUser;
}
updateProfile(firstNameIn:string,lastNameIn:string)
    {
        this.currentUser.firstName = firstNameIn;
        this.currentUser.lastName = lastNameIn;
    }
}