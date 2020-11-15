import React from 'react';
import {useStore} from '../../../../stores/createStore';
import Y from '../../../../utils/yup';
import {Formik} from 'formik';
import { observer } from 'mobx-react';
import FormWrapper from '../../components/FormWrapper';
import RegisterFormContent from './RegisterFormContent';
import NavigationService from '../../../../services/NavigationService';

function RegisterFormik({blindSubmit}){
    const registerStore = useStore(store=> store.auth.register);

    return (
        <Formik
            initialValues={{
                email: registerStore.email,
                fullname: registerStore.fullname,
                password: registerStore.password,
                repeatPassword: '',
            }}
            enableReinitialize={true}
            // validationSchema={Y.object({
            //     email: Y.string()
            //         .email('Invalid email address')
            //         .required('Enter email address'),
            //     fullname: Y.string().required('Enter fullname'),
            //     password: Y.string()
            //         .min(8, 'Password must contain at least 8 characters \t')
            //         .required('Enter password'),
            //     repeatPassword: Y.string()
            //         .equalTo(Y.ref('password'), 'Passwords must match')
            //         .required('Enter repeat password'),
            // })}
            onSubmit={(values, {setSubmitting })=>{
                setSubmitting(false);
                registerStore.registerFlow.run().then(()=>{
                    NavigationService.navigateToHome();
                }).catch(err=> alert(err));
            }}    
        >
            {(formik)=>(
                <FormWrapper  wrapperComponent={RegisterFormContent} blindSubmit={blindSubmit} formik={formik} />
            )}
        </Formik>
    )
}

export  default observer(RegisterFormik);