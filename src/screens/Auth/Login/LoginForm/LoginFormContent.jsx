import React from 'react';
import { View } from 'react-native';
import { useStore } from '../../../../stores/createStore';
import Input from '../../components/Input/Input';
import Box from '../../../../components/Box/Box';
import { observer } from 'mobx-react';

function LoginFormContent({ formik }) {
    const loginStore = useStore((store) => store.auth.login);

    return (
        <View onSubmit={formik.handleSubmit}>
            <Input
                name="email"
                label="Email"
                placeholder="example.@gmail.com"
                onChangeText={(value) => {
                    loginStore.setEmail(value);
                    formik.handleChange('email')(value);
                }}
                value={formik.values.email}
                isError={
                    !!(formik.touched.email && formik.errors.email)
                }
            />
            {formik.touched.email && formik.errors.email && (
                <Box text={formik.errors.email} type="error" />
            )}
            <Input
                name="password"
                label="Password"
                secureTextEntry={true}
                onChangeText={(value) => {
                    loginStore.setPassword(value);
                    formik.handleChange('password')(value);
                }}
                isError={
                    !!(
                        formik.touched.password &&
                        formik.errors.password
                    )
                }
            />
            {formik.touched.password && formik.errors.password && (
                <Box text={formik.errors.password} type="error" />
            )}
        </View>
    );
}

export default observer(LoginFormContent);
