import React from 'react';
import { View } from 'react-native';
import {useStore} from '../../../../stores/createStore';
import Input from '../../components/Input/Input';
import Box from '../../components/Box/Box';
import { observer } from 'mobx-react';

function RegisterFormContent({formik}) {
    const registerStore = useStore(store=> store.auth.register);

    return (
        <View onSubmit={formik.handleSubmit}>
            <Input
                name="email"
                label="Email"
                placeholder="example.@gmail.com"
                onChange={(event)=>{
                    registerStore.setEmail(event.target.value);
                    event.target.name = "email";
                    formik.handleChange("email");
                }}
                isError={!!(formik.touched.email && formik.errors.email)}
            />
            {
                formik.touched.email 
                && formik.errors.email 
                && <Box text={formik.errors.email} type="error"/>
            }
            <Input
                name="fullname"
                label="Full name"
                placeholder="Tony Stark"
                onChange={(event)=>{
                    registerStore.setFullname(event.target.value);
                    event.target.name = "fullname";
                    formik.handleChange("fullname");
                }}
                isError={!!(formik.touched.fullname && formik.errors.fullname)}
            />
            {
                formik.touched.fullname 
                && formik.errors.fullname 
                && <Box text={formik.errors.fullname} type="error"/>
            }
            <Input
                name="password"
                label="Password"
                secureTextEntry={true}
                onChange={(event)=>{
                    registerStore.setPassword(event.target.value);
                    event.target.name = "password";
                    formik.handleChange("password");
                }}
                isError={!!(formik.touched.password && formik.errors.password)}
            />
            {
                formik.touched.password 
                && formik.errors.password 
                && <Box text={formik.errors.password} type="error"/>
            }
            <Input
                name="repeatPassword"
                label="Repeat password"
                onChange={(event)=>{ 
                    event.target.name = "repeatPassword";  
                    formik.handleChange(event)
                }}
                isError={!!(formik.touched.repeatPassword && formik.errors.repeatPassword)}
            />
            {
                formik.touched.repeatPassword 
                && formik.errors.repeatPassword 
                && <Box text={formik.errors.repeatPassword} type="error"/>
            }
        </View>
)}

export  default observer(RegisterFormContent);