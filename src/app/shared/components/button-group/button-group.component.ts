import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
  HostListener
} from '@angular/core';

import './button-group.component.scss';
import { expandFadeInAnimation } from '@shared/animations/fade-in.animation';

export interface ButtonGroupButton {
  label: string;
  value: any;
}
@Component({
  selector: 'button-group',
  animations: [expandFadeInAnimation],
  styleUrls: ['./button-group.component.scss'],
  template: `
    <div class="btn-group btn-group-sm navbar-btn">
      <!--<button [ngClass]="['btn btn-default', 'btn-value-' + button.value]"
        *ngFor="let button of buttons"
        [class.active]="isSelectedButton(button.value)"
        (click)="buttonClick.next(button)">
        {{ button.label }}
      </button>-->
      <button class="btn btn-navbar btn-transparent ux-maker btn-toggle" (click)="toggleMenu()">
        <icon name="ellipsis-v"></icon>
        <icon name="dot-circle-o" class="pulse update-indicator text-primary"></icon>
      </button>
      <div class="menu-backdrop" *ngIf="!hide" (click)="hideMenu()"></div>
      <div class="panel menu-dropdown"   [class.end-animation]="end"
      [@expandFadeIn]="menuState"
      (@expandFadeIn.done)="endAnimation($event)">
        <div class="list-group custmenu">
          <button class="list-group-item" *ngFor="let button of buttons"
          [class.active]="isSelectedButton(button.value)"
          (click)="buttonClick.next(button)"
           >  {{ button.label }}
          </button>
        </div>
      </div>

      

    
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ButtonGroupComponent implements OnInit {
  @Input() buttons: ButtonGroupButton[];
  @Input() selectedButton: string;

  @Output() buttonClick = new EventEmitter<ButtonGroupButton>();

  @Input() newbuttons: ButtonGroupButton[];
  @Output() sec_buttonClick = new EventEmitter<ButtonGroupButton>();
  get menuState() {
    return this.hide ? 'hide' : 'show';
  }
  
  ngOnInit() {
   

  }
  end = false;
  hide = true;

  endAnimation({ toState }) {
    if (toState === 'hide') {
      this.end = true;
    }
  }

  hideMenu() {
    this.hide = true;
  }

  toggleMenu() {
    this.end = false;
    this.hide = !this.hide;
  }

  isSelectedButton(buttonValue: string) {
    return buttonValue === this.selectedButton;
  }
  
}
