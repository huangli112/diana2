import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient) {
    }
    httpOptions = {
        headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };
    baseUrl = '/api/v1';

    getAdminData(data): Observable<any> {
        return this.http.post(`${this.baseUrl}/login`, data);
    }
}
