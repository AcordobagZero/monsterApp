import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  users : any;
  recurso : any;

  constructor(private dataUsers:UsersServiceService, private resource:UsersServiceService) { }



  ngOnInit(): void {
    this.dataUsers.getUsers().subscribe(data => {this.users = data});
    this.resource.getResources().subscribe(data => {this.resource = data})
  }

}
