import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFootComponent } from './form-foot.component';

describe('FormFootComponent', () => {
  let component: FormFootComponent;
  let fixture: ComponentFixture<FormFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormFootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
