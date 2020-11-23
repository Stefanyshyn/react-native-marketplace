import React from 'react';
import { View } from 'react-native';
import { useStore } from '../../../../stores/createStore';
import Input from '../../components/Input/Input';
import Box from '../../../../components/Box/Box';
import { observer } from 'mobx-react';

function RegisterFormContent({ formik }) {
    const registerStore = useStore((store) => store.auth.register);

    return (
        <View onSubmit={formik.handleSubmit}>
            <Input
                name="email"
                label="Email"
                placeholder="example.@gmail.com"
                onChangeText={(value) => {
                    registerStore.setEmail(value);
                    formik.handleChange('email')(value);
                }}
                isError={
                    !!(formik.touched.email && formik.errors.email)
                }
            />
            {formik.touched.email && formik.errors.email && (
                <Box text={formik.errors.email} type="error" />
            )}
            <Input
                name="fullname"
                label="Full name"
                placeholder="Tony Stark"
                onChangeText={(value) => {
                    registerStore.setFullname(value);
                    formik.handleChange('fullname')(value);
                }}
                isError={
                    !!(
                        formik.touched.fullname &&
                        formik.errors.fullname
                    )
                }
            />
            {formik.touched.fullname && formik.errors.fullname && (
                <Box text={formik.errors.fullname} type="error" />
            )}
            <Input
                name="password"
                label="Password"
                secureTextEntry={true}
                onChangeText={(value) => {
                    registerStore.setPassword(value);
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
            <Input
                name="repeatPassword"
                label="Repeat password"
                secureTextEntry={true}
                onChangeText={(value) => {
                    formik.handleChange('repeatPassword')(value);
                }}
                isError={
                    !!(
                        formik.touched.repeatPassword &&
                        formik.errors.repeatPassword
                    )
                }
            />
            {formik.touched.repeatPassword &&
                formik.errors.repeatPassword && (
                    <Box
                        text={formik.errors.repeatPassword}
                        type="error"
                    />
                )}
        </View>
    );
}

export default observer(RegisterFormContent);
