import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { User } from 'src/app/models/user.model';
import { AllUsers } from 'src/app/store/filed.reducers';
import * as storeActions from "src/app/store/filed.actions";
import { PaymentService } from "../../services/payment-service/payment.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usersList: Array<User> = [];
  usersList$: Observable<AllUsers>;
  storeSubscribe: Subscription;

  constructor(
 private userService: PaymentService  ) {
  }

  ngOnInit() {
    this.usersList = this.getUsers()
  }
  
  getUsers(){
   return this.userService.getUsers()
  }

  ngOnDestroy(): void {
    if (this.storeSubscribe) {
      this.storeSubscribe.unsubscribe();
    }
  }

}
