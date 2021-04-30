import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewUserPageRoutingModule } from './view-user-routing.module';

import { ViewUserPage } from './view-user.page';

describe('ViewUserPage', () => {
  let component: ViewUserPage;
  let fixture: ComponentFixture<ViewUserPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserPage ],
      imports: [IonicModule.forRoot(), ViewUserPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
