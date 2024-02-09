import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  // animations: [
  //   trigger('fadeInOut', [
  //     state(
  //       'void',
  //       style({
  //         opacity: 0,
  //       })
  //     ),
  //     transition('void <=> *', animate('3000ms ease-in-out')),
  //   ]),
  // ],
})
export class ContactComponent {
  inputValueName: any = '';
  inputValueEmail: any = '';
  inputValueAge: any = '';
  inputValuePassword: any = '';
  showLableName(eventInfo: any) {
    this.inputValueName = eventInfo.target.value.length > 0;
  }
  showLableEmail(eventInfo: any) {
    this.inputValueEmail = eventInfo.target.value.length > 0;
  }
  showLableAge(eventInfo: any) {
    this.inputValueAge = eventInfo.target.value.length > 0;
  }
  showLablePassword(eventInfo: any) {
    this.inputValuePassword = eventInfo.target.value.length > 0;
  }
}
