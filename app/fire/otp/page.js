'use client'
import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  mobileNumber: '',
  otp: ''
};

const validationSchema = Yup.object().shape({
  mobileNumber: Yup.string()
    .required('Mobile number is required')
    .matches(/^[0-9]{10}$/, 'Invalid mobile number'),
  otp: Yup.string().when('mobileNumber', {
    is: (mobileNumber) => mobileNumber && mobileNumber.length === 10,
    then: Yup.string().required('OTP is required'),
    otherwise: Yup.string()
  })
});

const SignInForm = () => {
  const [showOTP, setShowOTP] = useState(false);

  const handleSignIn = (values, { setSubmitting }) => {
    console.log(values);
    setShowOTP(true);
    setSubmitting(false);
  };

  const handleVerifyOTP = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSignIn}
    >
      {({ handleSubmit, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <Field type="text" id="mobileNumber" name="mobileNumber" />
            <ErrorMessage name="mobileNumber" component="div" className="error" />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting || !!errors.mobileNumber}>
              Sign In
            </button>
          </div>
          {showOTP && (
            <>
              <div>
                <label htmlFor="otp">OTP:</label>
                <Field type="text" id="otp" name="otp" />
                <ErrorMessage name="otp" component="div" className="error" />
              </div>
              <div>
                <button
                  type="button"
                  disabled={isSubmitting || !!errors.otp}
                  onClick={handleVerifyOTP}
                >
                  Verify OTP
                </button>
              </div>
            </>
          )}
        </form>
      )}
    </Formik>
  );
};

export default SignInForm;