import { schema } from 'normalizr';

export const UserSchema = new schema.Entity('users');
export const UserColllectionSchema = [UserSchema];

export const ProductSchema = new schema.Entity('products');

export const LatestProductSchema = new schema.Entity('products');
export const LatestProductColllectionSchema = [LatestProductSchema];
