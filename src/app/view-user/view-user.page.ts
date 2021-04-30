import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.page.html',
  styleUrls: ['./view-user.page.scss'],
})
export class ViewUserPage implements OnInit {
  public user: any;
  public id: any;
  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getUserById();
    }

  getUserById(){
    this.usersService.getUserById(this.id).subscribe(res=>{
      this.user = res;
    })
  }

  onSwipeRight($event){
    this.navCtrl.navigateBack(['/home']);
  }

  onSwipeLeft($event){
    this.navCtrl.navigateBack(['/home']);
  }
}
