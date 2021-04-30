import { Injectable, NgZone } from "@angular/core";
import { GestureController, Platform } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class GestureServiceService {
  constructor(
    private gestureCtrl: GestureController,
    private zone: NgZone,
    private platform: Platform
  ) {}
  useSwiperGesture(cardArray) {
    for (let i = 0; i < cardArray.length; i++) {
      const card = cardArray[i];
      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        threshold: 15,
        gestureName: "swipte",
        onStart: (ev) => {},
        onMove: (ev) => {
          card.nativeElement.style.transform = `translateX(${
            ev.deltaX
          }px) rotate(${ev.deltaX / 10}deg)`;

          //TO SET COLOR ON SWIPE
          this.setCardColor(card.nativeElement);
        },
        onEnd: (ev) => {
          card.nativeElement.style.transition = ".5s ease-out";

          //Right side Move
          if (ev.deltaX > 150) {
            card.nativeElement.style.transform = `translateX(${
              +this.platform.width() * 2
            }px) rotate(${ev.deltaX / 2}deg)`;
          }
          // Left Side Move
          else if (ev.deltaX < -150) {
            card.nativeElement.style.transform = `translateX(-${
              +this.platform.width() * 2
            }px) rotate(${ev.deltaX / 2}deg)`;
          }
          // When No move or if small move back to original
          else {
            card.nativeElement.style.transform = "";
          }
        },
      });
      gesture.enable(true);
    }
  }

  // STYLE OF CARD WHEN GESTURE START
  setCardColor(element) {
    element.style.backgroundImage = "linear-gradient(to left, rgba(255,0,0,0), rgba(255,0,0,1))";
  }

}

