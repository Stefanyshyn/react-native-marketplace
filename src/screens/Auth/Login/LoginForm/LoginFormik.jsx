import React from 'react';
import {useStore} from '../../../../stores/createStore';
import * as Y from 'yup';
import {Formik} from 'formik';
import { observer } from 'mobx-react';
import FormWrapper from '../../components/FormWrapper';
import LoginFormContent from './LoginFormContent';
import NavigationService from '../../../../services/NavigationService';

function LoginFormik({blindSubmit}) {
    const loginStore = useStore(store=> store.auth.login);
    return (
        <Formik
            initialValues={{
                email: loginStore.email,
                password: loginStore.password,
            }}
            enableReinitialize={true}
            validationSchema={Y.object({
                email: Y.string()
                    .email('Invalid email address')
                    .required('Enter email address'),
                password: Y.string()
                    .min(8, 'Password must contain at least 8 characters')
                    .required('Enter password'),
            })}
            onSubmit={(values, {setSubmitting })=>{
                setSubmitting(false);
                loginStore.loginFlow.run().then(()=>{
                    NavigationService.navigateToHome();
                }).catch(err=> alert(err));
            }}    
        >
            {(formik)=>(
                <FormWrapper  wrapperComponent={LoginFormContent} blindSubmit={blindSubmit} formik={formik} />
            )}
        </Formik>)
}

export  default observer(LoginFormik);
