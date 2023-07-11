import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'phone-validation';

  phoneForm: FormGroup;
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.Tunisia, CountryISO.UnitedKingdom];

  constructor(private fb: FormBuilder) {
    this.phoneForm = this.fb.group({
      phone: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.phoneForm.value);
  }

  changePreferredCountries() {
		this.preferredCountries = [CountryISO.Tunisia, CountryISO.Canada];
	}
}
