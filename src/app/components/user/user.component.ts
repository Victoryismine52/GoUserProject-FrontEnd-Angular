import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service.service';
import {User} from './model/user';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  private model = new User('', '');
constructor(private userService: UserService) { }
ngOnInit() {
      // Load users
      this.loadUsers();
  }
loadUsers() {
        // Get all users from API
         this.userService.getUsers()
                           .subscribe(
                               users => this.users = users, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }
submitUser(){
        // Variable to hold a reference of addUser
        let commentOperation:Observable<User[]>;
        console.log(this.model);
        // Subscribe to observable
        this.userService.addUser(this.model).subscribe(
                                () => {
                                   // empty object
                                    this.model = new User('', '');
                                    // reload user list
                                    this.loadUsers();
                                },
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }
}
