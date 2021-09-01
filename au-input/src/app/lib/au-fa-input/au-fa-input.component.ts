import { AfterContentInit, Component, ContentChild, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css', './_au-fa-input-red-theme.scss']
})
export class AuFaInputComponent implements AfterContentInit {

  @Input() icon: string;

  @ContentChild(InputRefDirective, {static: false}) input: InputRefDirective;

  constructor() { }

  ngAfterContentInit() {
    if (!this.input) {
      console.error('the au-fa-input needs an input inside its content');
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  get classes() {
    const cssClasses = {
      'fa': true
    };

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }

}