import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { AllUsers } from "../../store/filed.reducers";
import * as storeActions from "../../store/filed.actions";

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  users: Array<any> = [];
  usersDetail$: Observable<AllUsers>;
  storeSubscribe: Subscription;

  constructor(private store: Store<{ userStore: AllUsers }>) {
    this.usersDetail$ = store.pipe(select("usersDetails"));
  }

  getUsers() {
    let stored_users = localStorage.getItem("filedUsers");

    if (stored_users) {
      this.users = JSON.parse(stored_users)
      return JSON.parse(stored_users);
    } else {
      return [];
    }
  }

  updateUsers(obj: any) {
    console.log(obj);
    this.users.push(obj)
    this.store.dispatch(storeActions.createUser({ user: obj }));
   // this.users = this.store.dispatch(storeActions.getUsers());
    console.log(this.users);
    localStorage.setItem("filedUsers", JSON.stringify(this.users));
  }
}
