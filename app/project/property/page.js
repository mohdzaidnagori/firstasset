'use client'
import React, { useEffect } from 'react'
import { useGetLoggedUserQuery } from '../../redux/services/userAuthApi';
import { getToken } from '../../redux/services/LocalStorageServices';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';

const Property = () => {
    const token = getToken('token')
    const router = useRouter()
    const getLoggedUserQuery = useGetLoggedUserQuery(token);

    useEffect(() => {
        if (getLoggedUserQuery.isError) {
            router.push('/')
        }
    }, [getLoggedUserQuery.isError])
    if (getLoggedUserQuery.isError) {
        return null;
    }
    const handleSubmit = async (values) => {
        console.log(values.images)
        values.images.forEach((image) => {
            console.log(image)
        });
    }
    const initialValues = {
        images: [],
    }
    return (
        <>
            {
                getLoggedUserQuery.isSuccess &&
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ values, setFieldValue }) => (
                        <Form>
                            <input
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                type="file"
                                multiple
                                name="images"
                                accept="image/*"
                                onChange={(event) => {
                                    let image = [];

                                    for (let i = 0; i < event.target.files.length; i++) {
                                        image.push(URL.createObjectURL(event.target.files[i]));
                                    }
                                    setFieldValue('images', image);
                                }}
                            />
                            <div className="mt-14 text-center">
                                <button type="submit" className='bg-teal-500 p-3 px-14 text-white font-semibold rounded-full'>Submit</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            }
        </>
    )
}

export default Property