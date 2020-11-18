import { createStackNavigator } from 'react-navigation-stack';
import CreatePostModal from '../screens/CreatePost/CreatePostModal';
import { screens } from '../screens/screens';

const CreatePostNavigator = createStackNavigator({
    [screens.CreatePost]: CreatePostModal,
});

export default CreatePostNavigator;
