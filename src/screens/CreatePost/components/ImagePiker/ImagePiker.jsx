import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import s from './style';

const images = [
    'https://www.google.com/search?q=%D1%88%D1%8C%D1%84%D0%BF%D1%83&safe=active&sxsrf=ALeKk03XTMrbizTUzicpbMIc7HValpmomA:1605967497934&tbm=isch&source=iu&ictx=1&fir=0gQYVq0l_fKbhM%252CU3RYP12E9mGhrM%252C_&vet=1&usg=AI4_-kQn12OGQkosKzrZvJnF_tNYhqHjhg&sa=X&ved=2ahUKEwiHt_CR55PtAhUDi6wKHTWIDmEQ9QF6BAgNEFo#imgrc=0gQYVq0l_fKbhM',
    'https://www.google.com/search?q=%D1%88%D1%8C%D1%84%D0%BF%D1%83&safe=active&sxsrf=ALeKk03XTMrbizTUzicpbMIc7HValpmomA:1605967497934&tbm=isch&source=iu&ictx=1&fir=0gQYVq0l_fKbhM%252CU3RYP12E9mGhrM%252C_&vet=1&usg=AI4_-kQn12OGQkosKzrZvJnF_tNYhqHjhg&sa=X&ved=2ahUKEwiHt_CR55PtAhUDi6wKHTWIDmEQ9QF6BAgNEFo#imgrc=0gQYVq0l_fKbhM',
    'https://www.google.com/search?q=%D1%88%D1%8C%D1%84%D0%BF%D1%83&safe=active&sxsrf=ALeKk03XTMrbizTUzicpbMIc7HValpmomA:1605967497934&tbm=isch&source=iu&ictx=1&fir=0gQYVq0l_fKbhM%252CU3RYP12E9mGhrM%252C_&vet=1&usg=AI4_-kQn12OGQkosKzrZvJnF_tNYhqHjhg&sa=X&ved=2ahUKEwiHt_CR55PtAhUDi6wKHTWIDmEQ9QF6BAgNEFo#imgrc=0gQYVq0l_fKbhM',
    'https://www.google.com/search?q=%D1%88%D1%8C%D1%84%D0%BF%D1%83&safe=active&sxsrf=ALeKk03XTMrbizTUzicpbMIc7HValpmomA:1605967497934&tbm=isch&source=iu&ictx=1&fir=0gQYVq0l_fKbhM%252CU3RYP12E9mGhrM%252C_&vet=1&usg=AI4_-kQn12OGQkosKzrZvJnF_tNYhqHjhg&sa=X&ved=2ahUKEwiHt_CR55PtAhUDi6wKHTWIDmEQ9QF6BAgNEFo#imgrc=0gQYVq0l_fKbhM',
    'https://www.google.com/search?q=%D1%88%D1%8C%D1%84%D0%BF%D1%83&safe=active&sxsrf=ALeKk03XTMrbizTUzicpbMIc7HValpmomA:1605967497934&tbm=isch&source=iu&ictx=1&fir=0gQYVq0l_fKbhM%252CU3RYP12E9mGhrM%252C_&vet=1&usg=AI4_-kQn12OGQkosKzrZvJnF_tNYhqHjhg&sa=X&ved=2ahUKEwiHt_CR55PtAhUDi6wKHTWIDmEQ9QF6BAgNEFo#imgrc=0gQYVq0l_fKbhM',
    'https://www.google.com/search?q=%D1%88%D1%8C%D1%84%D0%BF%D1%83&safe=active&sxsrf=ALeKk03XTMrbizTUzicpbMIc7HValpmomA:1605967497934&tbm=isch&source=iu&ictx=1&fir=0gQYVq0l_fKbhM%252CU3RYP12E9mGhrM%252C_&vet=1&usg=AI4_-kQn12OGQkosKzrZvJnF_tNYhqHjhg&sa=X&ved=2ahUKEwiHt_CR55PtAhUDi6wKHTWIDmEQ9QF6BAgNEFo#imgrc=0gQYVq0l_fKbhM',
];
function ImagePiker() {
    return (
        <ScrollView style={s.container}>
            {images.map((_) => (
                <View>
                    <Image source={{ uri: _ }}></Image>
                </View>
            ))}
        </ScrollView>
    );
}
export default ImagePiker;
