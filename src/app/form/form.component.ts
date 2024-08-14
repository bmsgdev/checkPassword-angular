import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  email = new FormControl('');
  password = new FormControl('',[Validators.required,Validators.minLength(8)]);
  @Output() sendPasword = new EventEmitter<string>();
  ngOnChanges(changes: SimpleChanges) {
    if (this.password.touched) {
      console.log('dd');
    }
  }
  getPassword() {
    // this.sendPasword.emit(this.password.)
    //  console.log(this.password.value+'dd');
  }
}
