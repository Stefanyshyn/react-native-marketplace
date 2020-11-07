import { NavigationActions } from 'react-navigation';

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
    naviganeToLogin(){
        this.navigane(root)
    }
}

export default new NavigationService();