import {Component, Input} from '@angular/core'
import { IEvent } from './shared/event.model'

@Component ({
    selector: 'event-thumbnail',
    template: `
      <div [routerLink] = "['/events',event.id]" class = "well hoverwell thumbnail">
    <h2>
      {{event?.name|uppercase}}
  </h2>
  <div>Date: {{event?.date|date}}</div>
  <div [ngClass] = "getEventTimeClass()" [ngSwitch] = "event.time" >Time: {{event?.time}}
      <span *ngSwitchCase = "'8:00 am'"> (Early Event)</span>
      <span *ngSwitchCase = "'10:00 am'"> (Late Event)</span>
      <span *ngSwitchDefault>(Normal Event)</span>

  </div>
  <div>Price: {{event?.price|currency:'USD'}}</div>
  <div *ngIf ="event?.location">
      <span>Location: {{event?.location.address}} </span>
      <span class = "pad-left">{{event?.location.city}}, {{event?.location.country}}</span>
  
  </div>
  <div *ngIf= "event?.url">
      <span>Online URL: {{event?.url}} </span>  
  </div>
  </div>
    `,
    styles: [`
    .bold{font-weight: bold;}
    .green{color:maroon;}
    .pad-left{margin-left: 10px;}
    .thumbnail{min-height: 200px;}
    `]
})

export class EventThumbnailComponent {
@Input() event: IEvent
getEventTimeClass()
{
    if(this.event.time ==='8:00 am')
        return 'green bold'
    return 
        ''
}
}