import { FormatWidth } from '@angular/common';
import { AfterViewInit, Component, ElementRef, forwardRef, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-checkbox-sn',
  templateUrl: './checkbox-sn.component.html',
  styleUrls: ['./checkbox-sn.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxSNComponent),
      multi: true,
    },
  ]
})
export class CheckboxSNComponent implements OnInit, AfterViewInit,ControlValueAccessor {

  constructor(private fb:FormBuilder) { }

  form = this.fb.control(false);

  ngAfterViewInit(): void {
    this._element.nativeElement.onchange = (value:any)=>{
      var valueComponente = "N";
      if(value.srcElement.checked) valueComponente = "S";
      this.fnOnChange(valueComponente)
    };
  }

  @ViewChild("check")
  _element!:ElementRef<HTMLInputElement>;


  fnOnTouched = ()=>{};
  
  fnOnChange = (value:any)=>{};

  writeValue(value: string): void {
    
    if(value === "S")
      this.form.setValue(true);
    else this.form.setValue(false);
    
    this.fnOnTouched();
  }

  registerOnChange(fn: any): void {
    this.fnOnChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.fnOnTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._element.nativeElement.disabled = isDisabled;
  }

  ngOnInit(): void {
  }

}
