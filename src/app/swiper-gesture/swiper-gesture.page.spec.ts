import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SwiperGesturePageRoutingModule } from './swiper-gesture-routing.module';

import { SwiperGesturePage } from './swiper-gesture.page';

describe('SwiperGesturePage', () => {
  let component: SwiperGesturePage;
  let fixture: ComponentFixture<SwiperGesturePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperGesturePage ],
      imports: [HttpClientTestingModule, IonicModule.forRoot(), SwiperGesturePageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(SwiperGesturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get mockdata', ()=>{
    expect(component.usersList).toBeDefined;
    expect(component.usersList.length).toBeGreaterThan(0);
  })
});
