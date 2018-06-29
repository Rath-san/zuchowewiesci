import { Component, Input, forwardRef, Renderer, ElementRef, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {

  static idCounter = 0;
  controlID: String;
  @Input() name: string;
  checked: Boolean;

  onTouchedCallback: () => {};

  constructor(private renderer: Renderer, private elementRef: ElementRef) {
    this.controlID = 'myCheckbox' + CheckboxComponent.idCounter++;
  }

  propagateChange = (_: any) => { };


  writeValue(value: any) {
    if ((value !== undefined) && (value !== null)) {
      this.checked = value;
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  onChange(event) {
    this.checked = event.target.checked;
    this.propagateChange(event.target.checked);
  }
}
