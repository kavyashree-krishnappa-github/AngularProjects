import {Component, Input, OnChanges} from '@angular/core';
import { ISession } from '../shared/event.model';
import { AuthService } from 'src/user/authentication.service';
import {VoterService} from '../shared/voter.service';

@Component({
    selector:'session-list',
    templateUrl: './session-details.component.html'

})

export class SessionListComponent implements OnChanges
{

   @Input() sessions:ISession[]
   visibleSessions:ISession[] = []
   @Input() filterByVal: string
   @Input() sortByVal:string
   constructor(public auth:AuthService,private voterService:VoterService)
   {

   }
ngOnChanges()
{
    if(this.sessions)
    {
        this.filterByValChanges(this.filterByVal);
        this.sortByVal ==='name'?this.visibleSessions.sort(sortByNameAsc):this.visibleSessions.sort(sortByVotesDesc)
    }
}
    filterByValChanges(filterByVal: string) {
        
        if(filterByVal ==='all')
        {
            this.visibleSessions = this.sessions.slice(0)

        }
        else{
            this.visibleSessions = this.sessions.filter(s=>{return s.level.toLocaleLowerCase() === filterByVal})
        }
    }
    toggleVote(session:ISession)
    {
        if(this.hasUserVoted(session))
        {
            this.voterService.deleteVoter(session,this.auth.currentUser.userName);
        }
        else{
            this.voterService.addVoter(session,this.auth.currentUser.userName);

        }
        if(this.sortByVal=='votes')
        {
            this.visibleSessions.sort(sortByVotesDesc);
        }
    }
    hasUserVoted(session:ISession)
    {
        return this.voterService.hasUserVoted(session,this.auth.currentUser.userName);
    }
}
function sortByNameAsc(s1:ISession, s2:ISession)
{
    if(s1.name>s2.name)
        return 1

    else if(s1.name===s2.name)
        return 0
    else return -1

}
function sortByVotesDesc(s1:ISession, s2:ISession)
{
return s2.voters.length - s1.voters.length
}
