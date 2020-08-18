import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class AuthService {
    constructor(){

    }
    private isLogged: boolean = false;
    private isUser: boolean = false;
    private isTeamLead: boolean = false;

    hasAccess(){
        return this.isLogged;
    }

    userHasAccess(){
        return this.isUser;
    }

    teamLeadHasAccess(){
        return this.isTeamLead;
    }

    setToTrue(){
        this.isLogged = true;
    }

    setToUser(){
        this.isUser = true;
    }

    setToTeamLead(){
        this.isTeamLead = true;
    }

}