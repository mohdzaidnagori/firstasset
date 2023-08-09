'use client'
import React, { useEffect, useState } from 'react'
import { useAddCommericialSellPropertyMutation, useGetLoggedUserQuery } from '../../app/redux/services/userAuthApi';
import { getToken } from '../../app/redux/services/LocalStorageServices';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { ErrorMessage, Form, Formik, useFormikContext } from 'formik';
import Inputs from './Inputs';
import Checkboxs from './Checkboxs';
import Selects from './Selects';
import LocationDropdown from '../statecity/LocationDropdown';
import Description from './Description';
import axios from '../../app/redux/services/axios';
import { Toaster, toast } from 'react-hot-toast';
import { MdClose } from 'react-icons/md';

const CommercialsalePropertyForm = ({ data, click }) => {
  const token = getToken('token')
  const router = useRouter()
  const getLoggedUserQuery = useGetLoggedUserQuery(token);
  const [isSuccess, setIsSuccess] = useState(false)
  console.log(data)


  useEffect(() => {
    if (getLoggedUserQuery.isError) {
      router.push('/')
    }
  }, [getLoggedUserQuery.isError])
  if (getLoggedUserQuery.isError) {
    return null;
  }

  const options = {
    type: [
      {
        value: 'Office Space', label: 'Office Space'
      },
      {
        value: 'Retail', label: 'Retail'
      },
    ],
    crore: [
      {
        value: 1, label: 1
      },
      {
        value: 2, label: 2
      },
      {
        value: 3, label: 3
      },
      {
        value: 4, label: 4
      }
    ],
    thousand: [
      {
        value: 1, label: 1
      },
      {
        value: 2, label: 2
      },
      {
        value: 3, label: 3
      },
      {
        value: 4, label: 4
      }
    ],
    laks: [
      {
        value: 1, label: 1
      },
      {
        value: 2, label: 2
      },
      {
        value: 3, label: 3
      },
      {
        value: 4, label: 4
      }
    ],
    days: Array.from({ length: 31 }, (_, i) => ({
      value: (i + 1).toString().padStart(2, '0'),
      label: (i + 1).toString().padStart(2, '0'),
    })),
    month: [
      {
        value: '01', label: '01'
      },
      {
        value: '02', label: '02'
      },
      {
        value: '03', label: '03'
      },
      {
        value: '04', label: '04'
      },
      {
        value: '05', label: '05'
      },
      {
        value: '06', label: '06'
      },
      {
        value: '07', label: '07'
      },
      {
        value: '08', label: '08'
      },
      {
        value: '09', label: '09'
      },
      {
        value: '10', label: '10'
      },
      {
        value: '11', label: '11'
      },
      {
        value: '12', label: '12'
      },

    ],
    year: [
      {
        value: '2021', label: '2021'
      },
      {
        value: '2022', label: '2022'
      },
      {
        value: '2023', label: '2023'
      },
      {
        value: '2024', label: '2024'
      },
      {
        value: '2025', label: '2025'
      },
      {
        value: '2026', label: '2026'
      },
      {
        value: '2027', label: '2027'
      },
      {
        value: '2028', label: '2028'
      },
      {
        value: '2029', label: '2029'
      },
      {
        value: '2030', label: '2030'
      },
      {
        value: '2031', label: '2031'
      },
      {
        value: '2032', label: 'May'
      },

    ],

    age_of_construction: [
      { value: 'New construction', label: 'New construction' },
      { value: 'less than 5 years', label: 'Less than 5 years' },
      { value: '5-10 years', label: '5-10 years' },
      { value: '10-15 years', label: '10-15 years' },
      { value: '15-20 years', label: '15-20 years' },
      { value: 'above 20 years', label: 'Above 20 years' },
    ],
    furnished_status: [
      { value: 'Furnished', label: 'Furnished' },
      { value: 'Unfurnished', label: 'Unfurnished' },
    ],
    floor_number: [
      { value: 'lower basement', label: 'Lower Basement' },
      { value: 'upper basement', label: 'Upper Basement' },
      { value: 'ground', label: 'Ground' },
      { value: '1', label: '1' },
      { value: '2', label: '2' },
    ],
    total_floor: [
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
    ],
    washrooms: [
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
    ],
    pantry_cafeteria: [
      { value: 1, label: 'Yes' },
      { value: 0, label: 'No' }
    ],
    currently_leased_out: [
      { value: 1, label: 'Yes' },
      { value: 0, label: 'No' }
    ],
    possession_status: [
      { value: '', label: '' },
      { value: 'under construction', label: 'under construction' },
      { value: 'Ready to move', label: 'Ready to move' }
    ]
  }

  const initialValues = {
    locality: '',
    type: '',
    property_name: '',
    property_address: '',
    expected_sale_price: '',
    crore: '',
    laks: '',
    thousand: '',
    booking_amount: '',
    possession_status: '',
    available_from: '',
    month: '',
    year: '',
    day: '',
    age_of_construction: '',
    furnished_status: '',
    floor_number: '',
    total_floor: '',
    washrooms: '',
    pantry_cafeteria: '',
    carpet_area: '',
    super_area: '',
    currently_leased_out: '',
    description: '',
    images: [],
    state: null,
    city: null,
    locality: null,
  };
  const validationSchema = Yup.object().shape({
    // locality: Yup.string().required('Locality is required'),
    type: Yup.string().required('Type is required'),
    property_name: Yup.string().required('Property name is required'),
    property_address: Yup.string().required('Property address is required'),
    possession_status: Yup.string().required('Possession status is required'),
    furnished_status: Yup.string().required('Furnished status is required'),
    floor_number: Yup.string().required('Floor number is required'),
    total_floor: Yup.string().required('Total floor is required'),
    washrooms: Yup.string().required('Washrooms is required'),
    pantry_cafeteria: Yup.string().required('Pantry/Cafeteria is required'),
    carpet_area: Yup.string().required('Carpet area is required'),
    super_area: Yup.string().required('Super area is required'),
    currently_leased_out: Yup.string().required('Currently leased out status is required'),
    description: Yup.string().required('Description is required'),
    state: Yup.object()
      .shape({
        value: Yup.string().required('City value is required'),
        label: Yup.string().required('City label is required'),
      })
      .required('State in is required'),
    city: Yup.object()
      .shape({
        value: Yup.string().required('State value is required'),
        label: Yup.string().required('State label is required'),
      })
      .required('City is required'),
    locality: Yup.object()
      .shape({
        value: Yup.string().required('Locality value is required'),
        label: Yup.string().required('Locality label is required'),
      })
      .required('Locality in is required'),
  });
  const handleSubmit = async (values) => {
    console.log(values)
    setIsSuccess(true)
    try {
      const formData = new FormData();
      formData.append('type', values.type);
      formData.append('property_name', values.property_name);
      formData.append('property_address', values.property_address);
      formData.append('possession_status', values.possession_status);
      formData.append('furnished_status', values.furnished_status);
      formData.append('floor_number', values.floor_number);
      formData.append('total_floor', values.total_floor);
      formData.append('washrooms', values.washrooms);
      formData.append('pantry_cafeteria', values.pantry_cafeteria);
      formData.append('carpet_area', values.carpet_area);
      formData.append('super_area', values.super_area);
      formData.append('currently_leased_out', values.currently_leased_out);
      formData.append('description', values.description);
      formData.append('locality', `${values.state.value} ${values.city.value} ${values.locality.value}`);
      const dates = `${values.year}-${values.month}-${values.day}`
      const isDate = values.year === undefined || values.day === undefined || values.month === undefined;
      formData.append('available_from', values.possession_status === 'Ready to move' ? '' : isDate ? values.available_from : dates);
      formData.append('age_of_construction', values.age_of_construction === null ? '' : values.age_of_construction);
      formData.append('id', data.id)

      const price = (values.crore * 10000000) + (values.laks * 100000) + (values.thousand * 10000)
      formData.append('expected_sale_price', crore && laks && thousand === undefined ? price : values.expected_sale_price);
      const isImagesArray = Array.isArray(values.images) && values.images.every((image) => image instanceof File);
      if (isImagesArray) {
        values?.images.forEach((image) => {
          formData.append('images[]', image);
        });
      }


      const url = 'commerical-sales-update';
      const config = {
        headers: {
          'Authorization': `Bearer ${token}` // Set the bearer token
        }
      };
      axios.post(url, formData, config)
        .then(response => {

          setIsSuccess(false)
          if (response.data.status === 'success') {
            toast.success(response.data.message)
            click()
          }
          if (response.data.status === 'failed') {
            Object.values(response.data.errors).forEach(error => {
              toast.error(error[0]);
            });

          }
        })
        .catch(error => {
          console.error(error);
        });

    } catch (error) {
      console.error(error);
    }
  }
  const year = data?.available_from?.slice(0, 4);
  const days = data?.available_from?.slice(8).toString()
  const month = data?.available_from?.slice(5, 7).toString()
  const crore = Math.floor(data.expected_sale_price / 10000000);
  const laks = Math.floor((data.expected_sale_price % 10000000) / 100000);
  const thousand = Math.floor((data.expected_sale_price % 100000) / 10000);
  return (
    <>
      <Toaster />
      {
        getLoggedUserQuery.isSuccess &&
        <section className='w-full flex justify-center py-10 absolute top-20 bottom-0 z-20 bg-white'>
          <div className='lg:shadow-2xl md:w-[800px] lg:p-20 lg:rounded-xl p-10 absolute'>
            <div onClick={click} className='absolute top-0 right-0 bg-teal-500 p-2 cursor-pointer hover:p-4 transition-all duration-200'><MdClose className='text-white text-2xl' /></div>
            <h3 className='text-center pb-5 text-2xl uppercase font-semibold'>Add Commercial Sell Property</h3>
            <Formik initialValues={data} onSubmit={handleSubmit} validationSchema={validationSchema}>
              {({ values, setFieldValue }) => (
                <Form encType="multipart/form-data">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Inputs name='property_name' label='Property Name' />
                    <Inputs name='property_address' label='Property Address' />
                  </div>
                  <div className='border-b-2 border-gray-700 my-10' />
                  <div className='grid gap-6 gap-y-2 md:grid-cols-2 mt-2'>
                    <Selects options={options.type} defaults={data.type} name='type' label='type' />
                    <Selects options={options.furnished_status} defaults={data.furnished_status} name='furnished_status' label='Furnished Status' />
                    <Selects options={options.floor_number} defaults={data.floor_number} name='floor_number' label='Floor Number' />
                    <Selects options={options.total_floor} defaults={data.total_floor} name='total_floor' label='Total Floor' />
                    <Selects options={options.washrooms} defaults={data.washrooms} name='washrooms' label='Washrooms' />
                    <Selects options={options.pantry_cafeteria} defaults={data.pantry_cafeteria} name='pantry_cafeteria' label='Pantry Cafeteria' />
                    <Selects options={options.currently_leased_out} defaults={data.currently_leased_out} name='currently_leased_out' label='Currently leased out' />
                  </div>
                  <div className='border-b-2 border-gray-700 my-10' />
                  <h4 className='text-black font-semibold uppercase'>Price Details</h4>
                  <div className='grid gap-6 gap-y-2 md:grid-cols-2 mt-2'>
                    <Selects options={options.crore} defaults={crore} name='crore' label='Amount In Crore' />
                    <Selects options={options.laks} defaults={laks} name='laks' label='Amount in lacs' />
                    <Selects options={options.thousand} defaults={thousand} name='thousand' label='Amount in Thousand' />
                  </div>
                  <div className='border-b-2 border-gray-700 my-10' />
                  <h4 className='text-black font-semibold uppercase'>Area</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Inputs name='carpet_area' label='Carpet Area Sqt' />
                    <Inputs name='super_area' label='Super Area Sqt' />
                  </div>
                  <div className='border-b-2 border-gray-700 my-10' />
                  <div className="">
                    <Description name="description" label="Description" />
                  </div>
                  <div className='border-b-2 border-gray-700 my-10' />
                  <div className="">
                    <LocationDropdown />
                  </div>
                  <div className='border-b-2 border-gray-700 my-10' />
                  <h4 className='text-black font-semibold uppercase'>Possession Status:</h4>
                  <div className='grid gap-6 gap-y-2 md:grid-cols-2 mt-2'>
                    <Selects disabled='disable' options={options.possession_status} defaults={data.possession_status} name='possession_status' label='Choose Any One' />
                  </div>

                  {values.possession_status === 'under construction' && (
                    <>
                      <h4 className='text-black font-semibold uppercase pt-6'>Availabel Form</h4>
                      <div className='grid gap-6 gap-y-2 md:grid-cols-2'>
                        <Selects options={options.days} defaults={days} name='day' label='Day' />
                        <Selects options={options.month} defaults={month} name='month' label='Month' />
                        <Selects options={options.year} defaults={year} name='year' label='Year' />
                      </div>
                    </>
                  )}

                  {values.possession_status === 'Ready to move' && (
                    <div className='mt-6'>
                      <Selects options={options.age_of_construction} defaults={data.age_of_construction} name='age_of_construction' label='Age Of Construction' />
                    </div>
                  )}

                  <div className="mt-2">
                    <label className='block py-2 text-base font-medium text-gray-900'>Select Images</label>
                    <input
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                      type="file"
                      multiple
                      name="images"
                      accept="image/*"
                      onChange={(event) => {
                        const files = Array.from(event.target.files);
                        setFieldValue('images', files);
                      }}
                    />

                  </div>
                  <div className="mt-14 text-center">
                    <button type="submit" disabled={isSuccess} className={`${isSuccess ? 'bg-teal-100' : 'bg-teal-500'} p-3 px-14 text-white font-semibold rounded-full`}>Submit</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </section>
      }
    </>
  )
}



export default CommercialsalePropertyForm