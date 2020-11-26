import { createCollection, asyncModel } from '../utils';
import { UserModel } from './UserModel';
import api from '../../services/api';
import { UserSchema } from '../schemas';

export const UsersCollection = createCollection(UserModel, {
    fetchById: asyncModel(fetchById),
});

function fetchById(id) {
    return async function fetchByIdFlow(flow) {
        const { data: user } = await api.user.fetchUser(id);
        flow.merge(user, UserSchema);
    };
}
