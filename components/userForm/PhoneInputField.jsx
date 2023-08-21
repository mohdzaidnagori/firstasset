'use client'
import { ErrorMessage, useFormikContext } from "formik";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import '../../app/globals.css'

const PhoneInputField = ({ name,label}) => {
    const { values, setFieldValue } = useFormikContext();
    const [phoneValue, setPhoneValue] = useState(values[name] || ''); // Initialize with initial value if available

    return (
        <div>
            <label className='block py-2 text-base font-medium text-gray-900'>{label}</label>
            <PhoneInput
                value={phoneValue}
                onChange={setPhoneValue}
                onBlur={() => setFieldValue(name, phoneValue)} // Set the phone_no value onBlur
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
            <ErrorMessage name={name} className='mt-1 text-red-700' component="div" />
        </div>
    );
};

export default PhoneInputField;






