import {Component} from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';
import  { durationPipe } from '../shared/duration.pipe';
@Component ({
   templateUrl: './event-details.component.html',
    styles:[`
    .container{padding-left:20px; padding-right:20px;}
    .img-fmt{height:200px;}
    a {cursor:pointer;}
    `]
})

export class EventDetailsComponent {
    event:IEvent
    addMode:Boolean
    filterBy:string = 'all'
    sortBy:string = ''
    constructor(private eventService:EventService,private route:ActivatedRoute)
    {

    }
    
ngOnInit()
{
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
}
addSession()
{
    this.addMode = true
}
saveNewSession(session:ISession)
{
const sessionId = Math.max.apply(null,this.event.sessions.map(s=>s.id));
session.id = sessionId + 1;
this.event.sessions.push(session);
this.eventService.updateEvent(this.event)
this.addMode = false

}
cancelSessionfeed()
{
    this.addMode = false;
}
}