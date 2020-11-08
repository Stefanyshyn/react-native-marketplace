import { NavigationActions, StackActions } from 'react-navigation';

class NavigationService {
    constructor(){
        this._navigation = null;
    }
    
    init(navigation){
        if(!this._navigation)
            this._navigation = navigation;
    }

    navigane(routeName, params){
        this._navigation.dispatch(NavigationActions.navigate({
            routeName: routeName,
            params
        }))
    }
    naviganeStack(routeName, params){
        this._navigation.dispatch(StackActions.navigate({
            routeName: routeName,
            params
        }))
    }
}

export default new NavigationService();