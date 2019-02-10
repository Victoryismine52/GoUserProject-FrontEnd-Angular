// user-service.service.ts
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {User} from '../components/user/model/user';
@Injectable()
export class UserService {
constructor(private http: Http) { }
// this is the endpoint of our REST API service in Go
  private usersUrl = 'http://localhost:9000/';
// Fetch all existing users
     getUsers() : Observable<User[]> {
// ...using get request
         return this.http.get(this.usersUrl)
          // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }
// Add a new user
    addUser (body: Object): Observable<Object> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'text/plain' }); // ... Set content type as text in order not to trigger preflight OPTIONS request
        let options       = new RequestOptions({ headers: headers }); // Create a request option
return this.http.post(this.usersUrl, body, options) // ...using post request
                         .map((res:Response) => res) // ...and returning data
                         .catch((error:any) => Observable.throw(error || 'Server error')); //...errors if any
    }
}
