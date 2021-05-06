import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewUserPageRoutingModule } from './view-user-routing.module';

import { ViewUserPage } from './view-user.page';
import { UsersService } from '../services/users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewUserPage', () => {
  let component: ViewUserPage;
  let fixture: ComponentFixture<ViewUserPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserPage ],
      providers:[UsersService],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, ViewUserPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUserById() ngOnInit method', () => {
    spyOn(component,'getUserById').and.callThrough();
        component.ngOnInit();
        expect(component.getUserById).toHaveBeenCalled();
  });

});
