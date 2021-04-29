import { Action, createReducer, on } from "@ngrx/store";
import { User } from "../models/user.model";

import * as allActions from "./filed.actions";

export interface AllUsers {
  users: User[];
}

export const initialState: AllUsers = {
  users: [],
};

const usersReducer = createReducer(
  initialState,
  on(allActions.getUsers, (state) => state),
  on(allActions.createUser, (state: AllUsers, { user }) => {
    console.log(state.users, user);

    return { ...state, users: [...state.users, user] };
  })
);

export function reducer(state: AllUsers | undefined, action: Action) {
  return usersReducer(state, action);
}

export const userStoreKey = "usersDetails";
