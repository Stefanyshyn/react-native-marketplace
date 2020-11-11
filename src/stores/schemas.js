import {schema } from "normalizr";

export const UserSchema = new schema.Entity('users');
export const UserColllectionSchema = [UserSchema];
