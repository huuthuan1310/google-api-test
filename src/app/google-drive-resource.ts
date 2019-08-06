import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DriveResource {
    private readonly API_URL: string = 'https://www.googleapis.com/drive/v3/files';
    private fields = 'files(mimeType,parents,driveId,iconLink,id,name,ownedByMe,owners,shared,sharingUser)';
    private q = '"0B1p9BpazNQwDaVJqY2lPbkRsemM" in parents';

    constructor(private httpClient: HttpClient) {
    }

    // authtoken as parameter only for demo purpose , better use a UserService to get the token
    public getList(authtoken: string): Observable<any> {
        return this.httpClient.get(this.API_URL + '?fields=' + this.fields + '&q=' + this.q, {
            headers: new HttpHeaders({
                Authorization: `Bearer ${authtoken}`
            })
        });
    }

    public getById(id: string, authtoken: string): Observable<any> {
        return this.httpClient.get(this.API_URL + '?fields=' + id , {
            headers: new HttpHeaders({
                Authorization: `Bearer ${authtoken}`
            })
        });
    }
}
