import { NavigationActions, StackActions } from 'react-navigation';
import { screens } from '../screens/screens';

class NavigationService {
    constructor() {
        this._navigation = null;
    }

    init(navigation) {
        if (!this._navigation) this._navigation = navigation;
    }

    navigate(routeName, params) {
        this._navigation.dispatch(
            NavigationActions.navigate({
                routeName: routeName,
                params,
            }),
        );
    }

    navigateToHome() {
        this.navigate(screens.MainApp);
    }

    navigateStack(routeName, params) {
        this._navigation.dispatch(
            StackActions.navigate({
                routeName: routeName,
                params,
            }),
        );
    }
}

export default new NavigationService();
