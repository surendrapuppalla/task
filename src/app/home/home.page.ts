import { Component } from '@angular/core';
import { UsersService, Users } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: UsersService) {}

  getUsers(): Users[] {
    return this.data.getUsers();
  }

}
