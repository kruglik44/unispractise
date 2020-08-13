import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class AuthService {
    constructor(){

    }
    isLogged: boolean = false;

    hasAccess(){
        return this.isLogged;
    }
}