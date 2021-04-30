import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UsersService, Users } from '../services/users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.page.html',
  styleUrls: ['./view-user.page.scss'],
})
export class ViewUserPage implements OnInit {
  public user: Users;

  constructor(
    private data: UsersService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.user = this.data.getUserById(parseInt(id));
  }

  onSwipeRight($event){
    this.navCtrl.navigateBack(['/home']);
  }

  onSwipeLeft($event){
    this.navCtrl.navigateBack(['/home']);
  }
}
