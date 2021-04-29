import {  createAction, props } from "@ngrx/store";
import { User } from "../models/user.model";

export const createUser =   createAction(
    "{createUser} add user to store",
    props<{ user: User }>()
  );

  export const getUsers = createAction(
    "{getUsers} Get all Users"
  );
  
