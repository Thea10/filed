import { async, TestBed } from "@angular/core/testing";
import { Store, StoreModule } from "@ngrx/store";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { AllUsers, initialState } from "src/app/store/filed.reducers";
import * as storeActions from "src/app/store/filed.actions";
import { User } from "src/app/models/user.model";

import { PaymentService } from "./payment.service";

describe("PaymentService", () => {
  // let initialState: AllUsers = { users: [] };
  let store: MockStore<{ userStore: AllUsers }>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.get(Store);

  }));

  it("should be created", () => {
    const service: PaymentService = TestBed.get(PaymentService);
    expect(service).toBeTruthy();
  });

  it("should get users from local storage or return an empty array if no users exist", () => {
    const paymentService: PaymentService = TestBed.get(PaymentService);
    let users = paymentService.getUsers();
    expect(users).toBeTruthy();
  });
});
