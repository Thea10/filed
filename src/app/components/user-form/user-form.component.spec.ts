import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  DebugElement,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { BsDropdownConfig, BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipConfig, TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxIntlTelInputModule } from "ngx-intl-tel-input";

import { UserFormComponent } from "./user-form.component";
import { By } from "@angular/platform-browser";

describe("UserFormComponent", () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let debug: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        FormsModule,
        ReactiveFormsModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        NgxIntlTelInputModule,
      ],
      providers: [BsDropdownConfig, TooltipConfig],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(UserFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should run save function", () => {
    fixture.detectChanges();
    spyOn(component, "saveUser");
    element = fixture.debugElement.query(By.css("button")).nativeElement;
    element.click();
    expect(component.saveUser).toHaveBeenCalledTimes(0);
  });

  it("should set form to invalid", async(() => {
    component.FormElements.first_name.setValue("");
    component.FormElements.email.setValue("");
    component.FormElements.last_name.setValue("");
    component.FormElements.monthly_budget.setValue("");
    component.FormElements.phone_number.setValue("");
    element = fixture.debugElement.query(By.css("button")).nativeElement;
    expect(component.addUserForm.valid).toBeFalsy();
    let attr = element.hasAttribute("disabled");
    expect(attr).toBeTruthy();
  }));
});
