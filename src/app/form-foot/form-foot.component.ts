import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-form-foot',
  templateUrl: './form-foot.component.html',
  styleUrl: './form-foot.component.css'
})
export class FormFootComponent {
  @Output() passwordForVerif: any;
}
