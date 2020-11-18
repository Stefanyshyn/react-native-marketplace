import { types } from 'mobx-state-tree';

export const ProductModel = types
    .model('ProductModel', {
        id: types.identifierNumber,
        ownerId: types.number,
        title: types.string,
        description: types.maybeNull(types.string),
        photos: types.maybeNull(types.array(types.string)),
        location: types.string,
        price: types.number,
        saved: false,
        createdAt: types.string,
        updatedAt: types.string,

        chatId: types.maybe(types.number),
    })
    .actions((store) => ({
        setSaved(value) {
            store.saved = !!value;
        },
    }));
