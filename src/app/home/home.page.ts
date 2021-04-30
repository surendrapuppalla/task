import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usersList: any;
  constructor(public usersService: UsersService) {}

  ionViewWillEnter(){
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(res=>{
      this.usersList = res;
    })
  }

}
