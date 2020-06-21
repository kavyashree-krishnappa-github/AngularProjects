import {Injectable} from '@angular/core'
import { ISession } from './event.model'


@Injectable()
export class VoterService{
    deleteVoter(session: ISession,userName:string) {
session.voters  = session.voters.filter((name=>(name!==userName)));
    }
    addVoter(session: ISession,userName:string) {
        session.voters.push(userName);
    }
    hasUserVoted(session:ISession,userName:string)
    {
        return session.voters.some(name=>name===userName);
    }
    }