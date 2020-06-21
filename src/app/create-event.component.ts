import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { EventService } from './shared/serviceIndex';
@Component ({
    templateUrl: './create-event.component.html',
    styles:[`
    em {color:red; font-size:10px;float:right;}
    .error input{background:#E05C65;}
    `]
})

export class CreateEventComponent {
    isDirty:Boolean = true
    newEvent
constructor(private router:Router, private eventService:EventService)
{

}
saveEvent(newEventValues)
{
    this.isDirty = false
    console.log(newEventValues)
    this.eventService.saveNewEvent(newEventValues);
    this.router.navigate(['/events'])

}
cancel()
{
this.router.navigate(['/events'])
}

}