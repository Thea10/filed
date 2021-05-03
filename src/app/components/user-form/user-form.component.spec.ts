import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { BsDropdownConfig, BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipConfig, TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxIntlTelInputModule } from "ngx-intl-tel-input";

import { UserFormComponent } from "./user-form.component";

describe("UserFormComponent", () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

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
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
