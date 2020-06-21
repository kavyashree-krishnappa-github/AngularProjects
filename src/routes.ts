import {Routes} from '@angular/router'
import {EventDetailsComponent} from './app/events-details/event-details.component';
import {EventsListComponent} from './app/events-list.component';
import { CreateEventComponent } from './app/create-event.component';
import { Error404Component } from './error/404.component';
import { EventRouteActivator } from './app/event-route-activator.service';
import {EventDetailsResolverComponent} from './app/shared/event-details-resolver.service';
import { CreateSessionComponent } from './app';
export const appRoutes =[
    {path:'404',component:Error404Component},
    {path:'events/new',component:CreateEventComponent, canDeactivate:['CheckNewEventSaved']},
    {path:'events', component:EventsListComponent, resolve:{events:EventDetailsResolverComponent}},
    {path:'events/:id',component:EventDetailsComponent,canActivate:[EventRouteActivator]},
    {path:'', redirectTo:'events', pathMatch:'full'},
    {path:'user', loadChildren:'../user/user.module#UserModule'},
    {path:'events/sessions/new',component:CreateSessionComponent}

    
]