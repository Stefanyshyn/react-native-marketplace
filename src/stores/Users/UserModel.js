import { types } from 'mobx-state-tree';

export const UserModel = types.model('UserModel', {
    id: types.identifierNumber,
    fullName: types.string,
    location: types.maybeNull(types.string),
    avatar: types.maybeNull(types.string),
    phone: types.maybeNull(types.string),
    createdAt: types.string,
    updatedAt: types.string,
    email: types.maybe(types.string),
});