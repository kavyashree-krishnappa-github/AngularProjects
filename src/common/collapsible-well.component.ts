import {Component, Input} from '@angular/core'
@Component({
    selector:'collapsible-content',
    template:`
    <div (click)=toggleContent() class = "well pointable">
        <h4>
        <ng-content select = "[well-title]"></ng-content>
        </h4>
        <ng-content select = "[well-body]" *ngIf = "toggle"></ng-content>
    </div>
    `
})

export class CollapsibleContentComponent {
@Input() title:string
toggle
toggleContent()
{
    this.toggle = !this.toggle
}

}