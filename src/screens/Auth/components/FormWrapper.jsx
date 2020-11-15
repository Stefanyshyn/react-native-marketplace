import React, { useEffect } from 'react';

const FormWrapper = ({wrapperComponent: WrapperComponent, blindSubmit, formik, ...props}) =>{
    useEffect(()=>{
        blindSubmit(formik.submitForm)
    },[])
    return (
        <WrapperComponent formik={formik} {...props}/>
)}

export  default FormWrapper;