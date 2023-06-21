import React from 'react'
import { useFormikContext } from 'formik';
import Select from 'react-select';

const LocationDropdown = () => {
    const formik = useFormikContext();

    const stateOptions = [
        { value: 'delhi', label: 'Delhi' },
        { value: 'mumbai', label: 'Mumbai' },
        // Add more state options
    ];

    const cityOptions = {
        delhi: [
            { value: 'new-delhi', label: 'New Delhi' },
            { value: 'south-delhi', label: 'South Delhi' },
            // Add more city options for Delhi
        ],
        mumbai: [
            { value: 'south-mumbai', label: 'South Mumbai' },
            { value: 'western-mumbai', label: 'Western Mumbai' },
            // Add more city options for Mumbai
        ],
        // Add more city options for other states
    };

    const localityOptions = {
        'new-delhi': [
            { value: 'locality1', label: 'Locality 1' },
            { value: 'locality2', label: 'Locality 2' },
            // Add more locality options for New Delhi
        ],
        'south-delhi': [
            { value: 'locality3', label: 'Locality 3' },
            { value: 'locality4', label: 'Locality 4' },
            // Add more locality options for South Delhi
        ],
        'south-mumbai': [
            { value: 'locality5', label: 'Locality 5' },
            { value: 'locality6', label: 'Locality 6' },
            // Add more locality options for South Mumbai
        ],
        'western-mumbai': [
            { value: 'locality7', label: 'Locality 7' },
            { value: 'locality8', label: 'Locality 8' },
            // Add more locality options for Western Mumbai
        ],
        // Add more locality options for other cities
    };

    const handleStateChange = (selectedOption) => {
        formik.setFieldValue('state', selectedOption);
        formik.setFieldValue('city', null);
        formik.setFieldValue('locality', null);
    };

    const handleCityChange = (selectedOption) => {
        formik.setFieldValue('city', selectedOption);
        formik.setFieldValue('locality', null);
    };

    const handleLocalityChange = (selectedOption) => {
        formik.setFieldValue('locality', selectedOption);
    };

    const selectedState = formik.values.state;
    const selectedCity = formik.values.city;
    const selectedLocality = formik.values.locality;

    const selectedCityOptions = selectedState ? cityOptions[selectedState.value] : [];
    const selectedLocalityOptions = selectedCity ? localityOptions[selectedCity.value] : [];

    return (
        <div className='flex flex-col gap-2'>
            <label className='block text-sm font-medium text-gray-900' htmlFor="state">State</label>
            <Select
                id="state"
                name="state"
                options={stateOptions}
                value={selectedState}
                onChange={handleStateChange}
                className="my-custom-select"
                classNamePrefix="my-custom-select"
            />

            <label htmlFor="city" className='block pt-2 text-sm font-medium text-gray-900'>City</label>
            <Select
                className="my-custom-select"
                classNamePrefix="my-custom-select"
                id="city"
                name="city"
                options={selectedCityOptions}
                value={selectedCity}
                onChange={handleCityChange}
                isDisabled={!selectedState}
            />

            <label className='block pt-2 text-sm font-medium text-gray-900' htmlFor="locality">Locality</label>
            <Select
                id="locality"
                name="locality"
                options={selectedLocalityOptions}
                value={selectedLocality}
                onChange={handleLocalityChange}
                isDisabled={!selectedCity}
                className="my-custom-select"
                classNamePrefix="my-custom-select"
            />
        </div>
    );
};
export default LocationDropdown