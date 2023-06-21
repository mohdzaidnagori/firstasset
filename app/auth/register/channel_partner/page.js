'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import Select from 'react-select';
import LocationDropdown from '../../../../components/statecity/LocationDropdown';
import UserFrom from '../../../../components/userForm/UserFrom';
import Link from 'next/link';
import Image from 'next/image';
import Intrest from '../../../../components/userForm/Intrest';

const ChannelPartner = () => {
    // const initialValues = {
    //     name: '',
    //     contact_person: '',
    //     email: '',
    //     phone: '',
    //     state: '',
    //     city: '',
    //     locality: '',
    //     interested_in: [],
    //     property_types: [],
    //     ticket_size_sale: '',
    //     ticket_size_lease: '',
    //     transactional_value: '',
    //     fractional_investment_size: '',
    // };
    const options = {
        interested_in: ['Fractional', 'Property Management', 'Sole selling projects with FIRST/ASSET'],
        property_types: [
            'Commercial Space',
            'Residential Apartment',
            'Warehouses',
            'Villa/Farm House',
            'Agriculture Land/Farm Land',
        ],
        ticket_size_sale: ['< 50L', '50L-2cr', '2cr-5cr', '> 5cr'],
        ticket_size_lease: ['< 25K', '25K-50cr', '50cr-1L', '> 1L'],
        transactional_value: ['5cr - 10cr', '10cr - 25cr', '25cr - 100cr', '> 100cr'],
        fractional_investment_size: ['Up to 1.5cr', '1.5cr - 2.5cr', '2.5cr - 5cr', '> 5cr'],
    };
    const initialValues = {
        name: '',
        contact_person: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
        state: null,
        city: null,
        locality: null,
    };


    const handleSubmit = (values) => {
        console.log(values);
    };
    return (
        <section className='w-full flex justify-center py-10'>
            <div className='bg-red-500 lg:p-20 lg:rounded-xl p-10'>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form>
                        <div className="grid gap-6 md:grid-cols-2 rounded-xl">
                            <UserFrom />
                        </div>
                        <div className="my-3">
                            <LocationDropdown />
                        </div>
                        <div>
                        <Intrest options={options.interested_in} />
                        </div>
                         <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </section>

    )
}

export default ChannelPartner
