import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-round-toggle-botton',
  templateUrl: './round-toggle-botton.component.html',
  styleUrls: ['./round-toggle-botton.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RoundToggleBottonComponent,
      multi: true,
    },
  ],
})
export class RoundToggleBottonComponent implements ControlValueAccessor {

  @Input() iconOn:string = "fa-solid fa-check";
  @Input() iconOff:string = "fa-solid fa-xmark";

  @Input() classOn:string = "";
  @Input() classOff:string = "";

  disabled:boolean = false;
  value:boolean = false;
  onChange!: (val: boolean | null) => void;
  onTouch!: (val: boolean | null) => void;

  @Input()toolTipOn = "";
  @Input()toolTipOff = "";

  constructor() { }


  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: (val: boolean | null) => void): void {
    this.onChange = fn;
  }


  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }


  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggle(){
    this.value = !this.value;
    this.onChange(this.value);
    this.onTouch(true);
  }

}
