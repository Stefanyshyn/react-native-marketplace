import { schema } from 'normalizr';

export const UserSchema = new schema.Entity('users');
export const UserColllectionSchema = [UserSchema];

export const LatestProductSchema = new schema.Entity('products');
export const LatestProductColllectionSchema = [LatestProductSchema];
