import { InfoRepository } from '../model/InfoRepository';
import { Profile } from '../model/Profile';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable(
    { providedIn: 'root' }
)
export class SearchProfileService {

    gitHubUrl = 'https://api.github.com/users/';

    constructor(private httpClient: HttpClient) { }

    getInfoUsername(username: string): Observable<Profile> {
        return this.httpClient.get<Profile>(this.gitHubUrl + username)
            .pipe(
                catchError(this.handleError)
            );
    }

    getInfoRepository(username: string): Observable<InfoRepository[]> {
        return this.httpClient.get<InfoRepository[]>(this.gitHubUrl + username + '/repos')
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(err: HttpErrorResponse) {
        let messageError = '';
        console.error(`Error occurred, message - > ${err.message}, status code -> ${err.status}`);
        if (err.status == 404) {
            messageError = 'Username not found';
        } else {
            messageError = 'Error Generic from request';
        }
        return throwError(messageError);
    }

}
