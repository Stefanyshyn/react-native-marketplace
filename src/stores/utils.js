import { getParent, getRoot, types } from 'mobx-state-tree';
import { normalize } from 'normalizr';

export function asyncModel(thunk, auto = true) {
    const model = types
        .model('AsyncModel', {
            isLoading: false,
            isError: false,
            errorMessage: '',
        })
        .actions((store) => ({
            start() {
                store.isLoading = true;
                store.isError = false;
                store.errorMessage = '';
            },
            success() {
                store.isLoading = false;
            },
            error(error) {
                if (error.response)
                    store.errorMessage =
                        '' +
                        (error.response.data?.message ||
                            error.response.data?.error);
                else store.errorMessage = '' + error;

                store.isError = true;
            },
            run(...args) {
                const promise = thunk(...args)(
                    store,
                    getParent(store),
                    getRoot(store),
                );
                if (auto) return store._auto(promise);
                return promise;
            },
            async _auto(promise) {
                try {
                    store.start();

                    await promise;

                    store.success();
                } catch (error) {
                    store.error(error);
                    throw error;
                }
            },
            merge(data, schema) {
                const { entities, result } = normalize(data, schema);
                getRoot(store).entities.merge(entities);
                return result;
            },
        }));

    return types.optional(model, {});
}
export function createPersist(store) {
    onSnapshot(store, (snapshot) => {
        setPersist({
            //snapshot.entities,
        });
    });

    function rehydrate() {
        const snapshot = getPersist();
        if (snapshot) {
            applySnapshot(store, snapshot);
        }
    }
    return {
        rehydrate,
    };
}

export function createCollection(ofModel, asyncModel = {}) {
    const collection = types
        .model('CollectionModel', {
            collection: types.map(ofModel),
            ...asyncModel,
        })
        .views((store) => ({
            get(key) {
                return store.collection.get(String(key));
            },
            has(id) {
                return store.collection.has(id);
            },
        }))
        .actions((store) => ({
            add(key, value) {
                store.collection.set(String(key), value);
            },
            update(key, value) {
                const item = store.collection.get(key);
                Object.assign(item, value);
            },
        }));

    return types.optional(collection, {});
}

export function safeReference(T) {
    return types.reference(T, {
        get(identifier, parent) {
            if (isStateTreeNode(identifier)) {
                identifier = getIdentifier(identifier);
            }
            return resolveIdentifier(T, parent, identifier);
        },
        set(value) {
            return value;
        },
    });
}
