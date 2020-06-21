import {Component, OnInit, Output} from '@angular/core'
import { FormControl, Validators, FormGroup } from '@angular/forms'
import { ISession } from '../shared/event.model'
import {restrictedWords} from '../shared/restricted-words.validator'
import { EventEmitter } from '@angular/core'
//import { Session } from 'inspector'

@Component({
    selector:'create-session',
    templateUrl:'./create-session.component.html',
    styles:[`
    em {color:red; font-size:10px;float:right;}
    .error input, .error textarea{background:#E05C65;}
    `]
    })

export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter();
    @Output() cancelNewSession = new EventEmitter();
    sessionForm: FormGroup
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl
    ngOnInit(){
        
        this.name = new FormControl('',[Validators.required, restrictedWords(['foo','boo'])])
        this.presenter = new FormControl('',Validators.required)

        this.duration = new FormControl('',Validators.required)

        this.level = new FormControl('',Validators.required)
        this.abstract = new FormControl('',[Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'boo'])])
        this.sessionForm = new FormGroup({
            name:this.name,
            presenter: this.presenter,
            duration: this.duration,
            Level: this.level,
            abstract: this.abstract
        
            
        
        })

 
    }
    saveSession(sessionValues)
    {
        let session:ISession = {
            id: undefined,
            name: sessionValues.name,
            presenter: sessionValues.presenter,
            duration: +sessionValues.duration,
            level:sessionValues.Level,
            abstract: sessionValues.Abstract,
            voters: []

        }
        console.log(session)

        
        this.saveNewSession.emit(session);



    }
    cancel()
    {
        this.cancelNewSession.emit();
    }
}