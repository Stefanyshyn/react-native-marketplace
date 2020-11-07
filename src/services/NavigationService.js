import { NavigationAction, NavigationActions } from 'react-navigation';

class NavigationService {
    constructor(){
        this._navigation = null;
    }
    
    init(navigation){
        console.log(navigation.current)
        if(!this._navigation)
            this._navigation = navigation;
    }

    navigane(route, params){
        this._navigation.dispatch(NavigationActions.navigate({
            name: route,
            params
        }))
    }
}

export default new NavigationService();