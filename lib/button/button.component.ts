import { Component, Input } from '@angular/core';

@Component({
  selector: 'poc-button',
  exportAs: 'pocButton',
  templateUrl: './button.html',
  styleUrls: ['../styles/globals.scss', './button.scss']
})
export class ButtonComponent {
  @Input()
  public classname = '';
  @Input()
  public placeholder = 'click me';
  @Input()
  public disabled = false;
}
