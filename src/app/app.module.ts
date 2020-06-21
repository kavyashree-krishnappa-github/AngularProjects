import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CollapsibleContentComponent} from '../common/collapsible-well.component';
import {EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavBarComponent, 
  EventDetailsComponent, CreateEventComponent,EventService,EventRouteActivator,EventDetailsResolverComponent, 
  CreateSessionComponent,SessionListComponent}
   from './index';
import {Error404Component} from 'src/error/404.component';
import { appRoutes } from 'src/routes';
import {durationPipe} from './shared/duration.pipe';
import {UserModule} from '../user/user.module';
import { AuthService } from 'src/user/authentication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TOASTR_TOKEN,Toastr } from 'src/common/toastr.service';
import { UpvoteComponent } from './events-details/upvote.component';
import {VoterService} from './shared/voter.service';

let toastr:Toastr = window['toastr'];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    UserModule,FormsModule, ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavBarComponent, durationPipe,
    EventDetailsComponent, UpvoteComponent,CreateEventComponent, Error404Component, CreateSessionComponent, SessionListComponent, CollapsibleContentComponent
  ],
  providers:[EventService,VoterService,{provide:TOASTR_TOKEN,useValue:toastr},EventRouteActivator,AuthService,{provide:'CheckNewEventSaved',useValue:checkDirtyFlag},EventDetailsResolverComponent],

  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyFlag(eventComponent:CreateEventComponent)
{
  if(eventComponent.isDirty)
  {
    return window.confirm("Data is unsaved. Are you sure you want to leave?")
  } 
  return true
}