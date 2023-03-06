import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable()
export class JWTTokenService {

    jwtToken: string;
    decodedToken: { [key:string]: string};
    

    constructor() {}

    setToken(token: string) {
        if (token) {
            this.jwtToken = token;
        }
    }

    decodeToken() {
        if(this.jwtToken) {
            this.decodedToken = jwt_decode(this.jwtToken);
        }
    }

    getDecodeToken() {
        if(this.jwtToken) {
            return jwt_decode(this.jwtToken);
        }
    }

    getUser() {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken['username'] : null;
    }

    getEmailId() {
        this.decodeToken();
        return this.decodedToken ? this.decodedToken['email'] : null;
    }

    getExpiryTime() {
        this.decodeToken();
        return this.decodedToken ? Number(this.decodedToken['exp']) : 0;
    }

    isTokenExpired(): boolean {
        const expiryTime: number = this.getExpiryTime();
        if (expiryTime) {
          return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
        } else {
          return false;
        }
      }
}