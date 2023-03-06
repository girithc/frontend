import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {shareReplay } from 'rxjs/operators'

const api_url = 'http://127.0.0.1:8000/api/token/'
const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
    providedIn: 'root'
})


export class AuthService {

    constructor(private http: HttpClient) {}


    login(username: string, password: string): Observable<any> {
        
        console.log({username, password});
        return this.http.post
        ( 
            api_url, 
            {username, password},
            httpOptions, 
        ).pipe(shareReplay());
    }

    logout(): Observable<any> {
        return this.http.post(api_url , { }, httpOptions);
    }
}