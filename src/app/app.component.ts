import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';


interface PhoneForm {
  name: FormControl<string | null>;
  surname: FormControl<string | null>;
  phone: FormControl<string | null>;
}

interface ProfileForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  phone: FormControl<string | null>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'phone-validation';

  @ViewChild(NgxMatIntlTelInputComponent) phoneInput:
    | NgxMatIntlTelInputComponent
    | undefined;

  phoneForm = new FormGroup<PhoneForm>({
    name: new FormControl(null, [Validators.required]),
    surname: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
  });

  profileForm = new FormGroup<ProfileForm>({
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    phone: new FormControl(null),
  });

  constructor() {}

  onSubmit() {
    console.log('onSubmit', this.phoneForm);
  }

  onReset() {
    this.phoneForm.reset();
  }

  ngAfterViewInit() {
    if (this.phoneInput && this.phoneInput.matMenu) {
      this.phoneInput.matMenu.panelClass = 'custom-panel';
    }
  }

 
}
