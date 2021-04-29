import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

import {
  SearchCountryField,
  TooltipLabel,
  CountryISO,
} from "ngx-intl-tel-input";
import { PaymentService } from "src/app/services/payment-service/payment.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  addUserForm = new FormGroup({
    first_name: new FormControl("", [Validators.required]),
    last_name: new FormControl("", [Validators.required]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z0-9]{2,}$"),
    ]),
    monthly_budget: new FormControl("", [Validators.required]),
    phone_number: new FormControl("", [Validators.required]),
  });
  formSubmitted: boolean;
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;

  feedbackText: any;

  constructor(
    private userService: PaymentService
  ) {}

  ngOnInit() {}

  get FormElements() {
    return this.addUserForm.controls;
  }

  async saveUser() {
    console.log(this.addUserForm.value);
    this.formSubmitted = true;
    if (this.addUserForm.invalid) {
      console.log("invalid");
      return;
    }

    this.userService.updateUsers({
        ...this.addUserForm.value,
        phone_number: this.addUserForm.value.phone_number.number,
      
    })
    this.addUserForm.reset();
    this.formSubmitted = false;
    this.feedbackText =
      "User created! Click the button below to view your user list";

    setTimeout(() => {
      this.feedbackText = null;
    }, 5000);
  }
}
