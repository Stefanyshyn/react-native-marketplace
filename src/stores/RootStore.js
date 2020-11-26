import { types } from 'mobx-state-tree';
import AuthStore from './Aurh/AuthStore';
import ViewerStore from './ViewerStore';
import EntitiesStore from './EntitiesStore';
import ProductsStore from './Products/ProductsStore';
import api from '../services/api';
import NavigationService from '../services/NavigationService';
import { screens } from '../screens/screens';
import { alert } from '../utils/alert';

const RootStore = types
    .model('RootStore', {
        viewer: types.optional(ViewerStore, {}),
        auth: types.optional(AuthStore, {}),
        products: types.optional(ProductsStore, {}),
        entities: types.optional(EntitiesStore, {}),
    })
    .actions((store) => ({
        async bootstrap() {
            try {
                let result = await api.users.getMe();

                store.viewer.setViewer(result.data);
                store.auth.setIsLoggedIn(true);
                NavigationService.navigate(screens.MainApp);
            } catch (e) {
                store.auth.logoutFlow.run();
                NavigationService.navigate(screens.Auth);
            }
        },
    }));

export default RootStore;
