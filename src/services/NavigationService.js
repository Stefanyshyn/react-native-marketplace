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
    goBack() {
        this._navigation.dispatch(NavigationActions.back());
    }

    navigateToHome() {
        this.navigate(screens.MainApp);
    }
}

export default new NavigationService();
