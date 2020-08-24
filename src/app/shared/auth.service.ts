import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class AuthService {
    constructor(){

    }
    private canLeave: boolean = true;
    private canLeaveProjectComp: boolean = true;
    private isLogged: boolean = false;
    private isUser: boolean = false;
    private isTeamLead: boolean = false;
    private role: string = '';

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
    changeToUser(){
        this.role = 'user';
    }
    changeToTeamLead(){
        this.role = 'teamlead';
    }
    changeToAdmin(){
        this.role = 'admin';
    }
    showRole(){
        return this.role;
    }

    changeLeaveStatus(){
        this.canLeave = !this.canLeave;
    }

    showLeaveStatus(){
        return this.canLeave;
    }

    changeLeaveProjectStatus(){
        this.canLeaveProjectComp = !this.canLeaveProjectComp;
    }

    showLeaveProjectStatus(){
        return this.canLeaveProjectComp;
    }
}