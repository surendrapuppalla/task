import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usersList: any;
  text: string = "Users List";
  constructor(public usersService: UsersService, public navCtrl: NavController) {}

  ionViewWillEnter(){
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(res=>{
      this.usersList = res;
    })
  }

  goTogesture() {
    this.navCtrl.navigateRoot('swiper-gesture');
  }

}
