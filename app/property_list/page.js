"use client"
import Link from 'next/link';
import axios from '../redux/services/axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { EffectCreative, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import style from '../../components/swiper/homeBanner/Banner.module.css'
import { BiCard } from 'react-icons/bi';
import { FiType } from 'react-icons/fi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { MdClose, MdFilterAlt } from 'react-icons/md';
import IntresetedForm from '../../components/userForm/IntresetedForm';
import WordLimit from '../../components/text/WordLimit';


const Propert_list = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true)
    const [orderBy, setOrderBy] = useState('distance');
    const [IntrestedData, setIntrestedData] = useState([])
    const [interestedItemIndex, setInterestedItemIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    const [filters, setFilters] = useState({
        propertyType: '',
        furnished: '',
        expected_price: '',
        carpet_area: '',
        Bedrooms: '',
        amenities: {
            swimming_pool: false,
            gym: false,
            are_peds: false,
            are_non_veg: false,
            are_bachlore: false
        },
        // Add more filters as needed
    });


    useEffect(() => {
        fetchPropertyData();
    }, [searchText]);





    const fetchPropertyData = async () => {
        const url = 'commerical-rents'
        try {
            const response = await axios.get(url, {
                params: {
                    search: searchText,
                    orderBy,
                }
            });
            setData(response.data.data);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
        }
    }

    const handleIntrseted = (item, index) => {
        setIntrestedData(item)
        setInterestedItemIndex(index);
    }
    function createMarkup(datas) {
        return { __html: datas };
    }

    function formatNumber(value) {
        if (value >= 10000000) { // If value is in crore
            const croreValue = (value / 10000000).toFixed(1).replace(/\.00$/, '');
            return `${croreValue} Cr`;
        } else if (value >= 100000) { // If value is in lacs
            const lacValue = (value / 100000).toFixed(2).replace(/\.00$/, '');
            return `${lacValue} lac`;
        } else if (value >= 1000) { // If value is in thousands
            const thousandValue = (value / 1000).toFixed(2).replace(/\.00$/, '');
            return `${thousandValue} K`;
        } else { // If value is less than thousands
            return value.toString();
        }
    }

    function createMarkup(data) {
        return { __html: data };
    }









    useEffect(() => {
        // Filter the data based on the selected filters
        const filteredData = data.filter(item => {
            const typeCondition = !filters.propertyType || item.property_type === filters.propertyType;
            const furnishedCondition = !filters.furnished || item.furnished === filters.furnished;
            const priceCondition = applyPriceFilter(item.expected_price, filters.expected_price);
            const bedroomsCondition = applyBedroomsFilter(item?.Bedrooms, filters.Bedrooms);
            const carpetAreaCondition = applyCarpetAreaFilter(item.carpet_area, filters.carpet_area);
            const amenitiesCondition = applyAmenitiesFilter(item, filters.amenities);
            return (
                typeCondition &&
                furnishedCondition &&
                priceCondition &&
                carpetAreaCondition &&
                bedroomsCondition &&
                amenitiesCondition
            );

            // console.log(typeCondition);
        });
        setFilteredData(filteredData);
    }, [data, filters]);

    const handleAmenityChange = (amenity) => {
        setFilters({
            ...filters,
            amenities: {
                ...filters.amenities,
                [amenity]: !filters.amenities[amenity]
            }
        });
    };

    const handleCheckboxChange = (propertyType) => {
        setFilters({ ...filters, propertyType });
    };
    const handleBedroomsChange = selectedBedrooms => {
        setFilters({ ...filters, Bedrooms: selectedBedrooms });
    };

    const handleFurnishedChange = (selectedFurnished) => {
        setFilters({ ...filters, furnished: selectedFurnished });
    };
    const handlePriceChange = selectedPrice => {
        setFilters({ ...filters, expected_price: selectedPrice });
    };
    const handleCarpetAreaChange = selectedCarpetArea => {
        setFilters({ ...filters, carpet_area: selectedCarpetArea });
    };
    const handleSwimmingPoolChange = (e) => {
        console.log(e.target.checked);
        const value = e.target.checked ? 1 : 0;
        setFilters({ ...filters, swimming_pool: value });
    };

    const applyPriceFilter = (itemPrice, selectedPrice) => {
        if (!selectedPrice) {
            return true;
        }
        let [min, max] = [0, Infinity];
        if (filters.propertyType === 'c_rents' || filters.propertyType === 'r_rents') {
            const priceOptions = {
                'Less than 50000': [0, 50000],
                '50000 to 100000': [50001, 100000],
                '100000 to 200000': [100001, 200000],
                'Greater than 200000': [200001, Infinity],
            };

            [min, max] = priceOptions[selectedPrice] || [0, Infinity];
            return itemPrice > min && itemPrice <= max;
        }
        if (filters.propertyType === 'c_sales' || filters.propertyType === 'r_sales') {
            {
                const priceOptions = {
                    'Less than 1': [0, 10000000],
                    '1 to 2': [10000001, 20000000],
                    '2 to 5': [20000001, 50000000],
                    'Greater than 5': [50000001, Infinity],
                };

                [min, max] = priceOptions[selectedPrice] || [0, Infinity];
                return itemPrice > min && itemPrice <= max;
            }
        }
    };

    const applyCarpetAreaFilter = (itemArea, selectedArea) => {
        if (!selectedArea) {
            return true;
        }
        let [min, max] = [0, Infinity];
        switch (selectedArea) {
            case 'greater_than_500':
                min = 0;
                max = 500;
                break;
            case '500_to_1000':
                min = 500;
                max = 1000;
                break;
            case '1000_to_2000':
                min = 1000;
                max = 2000;
                break;
            case 'less_than_2000':
                min = 2000;
                break;
            default:
                break;
        }
        return itemArea >= min && itemArea <= max;
    };
    const applyBedroomsFilter = (itemBedrooms, selectedBedrooms) => {
        if (!selectedBedrooms) {
            return true;
        }
        if (selectedBedrooms === '5+') {
            return itemBedrooms >= 5;
        } else {
            return itemBedrooms === parseInt(selectedBedrooms); // Assuming itemBedrooms is an integer
        }
    };
    const applyAmenitiesFilter = (item, selectedAmenities) => {
        for (const amenity in selectedAmenities) {
            if (selectedAmenities[amenity] && !item[amenity]) {
                return false;
            }
        }
        return true;
    };


    const clearAllFilters = (toggle) => {
        if(toggle){
            setIsOpen(!isOpen);
        }
      
        setFilters({
            propertyType: '',
            furnished: '',
            expected_price: '',
            carpet_area: '',
            Bedrooms: '',
            amenities: {
                swimming_pool: false,
                gym: false,
                are_peds: false,
                are_non_veg: false,
                are_bachlore: false
            }
        });
    };

    const renderPriceInput = () => {
        if (filters.propertyType === 'c_rents' || filters.propertyType === 'r_rents') {
            return (
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <select value={filters.expected_price || ''} onChange={e => handlePriceChange(e.target.value)} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <option value="">All</option>
                        <option value="Less than 50000">Less than 50000</option>
                        <option value="50000 to 100000">50000 to 100000</option>
                        <option value="100000 to 200000">100000 to 200000</option>
                        <option value="Greater than 200000">Greater than 200000</option>
                    </select>
                </div>
            );
        } else if (filters.propertyType === 'c_sales' || filters.propertyType === 'r_sales') {
            return (
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <select value={filters.expected_price || ''} onChange={e => handlePriceChange(e.target.value)} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <option value="">All</option>
                        <option value="Less than 1">Less than 1 Cr</option>
                        <option value="1 to 2">1 Cr to 2 Cr</option>
                        <option value="2 to 5">2 Cr to 5 Cr</option>
                        <option value="Greater than 5">Greater than 5 Cr</option>
                    </select>
                </div>
            );
        } else {
            return null;
        }
    };











    return (
        <section>
            {isOpen && (
                <div className='z-[998] bg-gray-800/50 fixed inset-0'>
                    <div
                        id="crud-modal"
                        tabIndex="-1"
                        aria-hidden="true"
                        className="overflow-y-auto overflow-x-hidden fixed top-10 right-0 left-0 md:left-[35%] md:top-[20%] z-[9999] justify-center items-center w-full h-[calc(100%-1rem)] max-h-full"
                    >
                        <div className="relative p-4 w-full max-w-md max-h-full">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Filters Property
                                    </h3>
                                    <button
                                        type="button"
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-toggle="crud-modal"
                                        onClick={() => clearAllFilters(true)}
                                    >
                                        <svg
                                            className="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                            />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <form className="p-4 md:p-5">
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2">
                                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Property Type</label>
                                            <select value={filters.propertyType || ''} onChange={(e) => handleCheckboxChange(e.target.value)} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                                <option value="">All</option>
                                                <option value="r_rents">Residential Rents</option>
                                                <option value="r_sales">Residential Sales</option>
                                                <option value="c_rents">Commercial Rents</option>
                                                <option value="c_sales">Commercial Sales</option>
                                            </select>
                                        </div>


                                        {renderPriceInput()}
                                        <div className="col-span-2 sm:col-span-1">
                                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Carpet Area</label>
                                            <select value={filters.carpet_area || ''} onChange={(e) => handleCarpetAreaChange(e.target.value)} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                                <option value="">All</option>
                                                <option value="greater_than_500">Less than 500</option>
                                                <option value="500_to_1000">500 to 1000</option>
                                                <option value="1000_to_2000">1000 to 2000</option>
                                                <option value="less_than_2000">Greater than 2000</option>
                                            </select>
                                        </div>

                                        <div className="col-span-2 sm:col-span-1">
                                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Furniture Status</label>
                                            <select value={filters.furnished || ''} onChange={(e) => handleFurnishedChange(e.target.value)} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                                <option value="">All</option>
                                                <option value="Fully Furnished">Fully Furnished</option>
                                                <option value="Unfurnished">Unfurnished</option>
                                                <option value="Semi Furnished">Semi Furnished</option>
                                            </select>
                                        </div>
                                        {
                                            (filters.propertyType === 'r_sales' || filters.propertyType === 'r_rents') &&

                                            <div className="col-span-2 sm:col-span-1">
                                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">BHK</label>
                                                <select value={filters.Bedrooms || ''} onChange={(e) => handleBedroomsChange(e.target.value)} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                                    <option value="">Any</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5+">5+</option>
                                                </select>
                                            </div>
                                        }
                                        <div className='col-span-2 grid grid-cols-2'>
                                            <div>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        checked={filters.amenities.swimming_pool}
                                                        onChange={() => handleAmenityChange('swimming_pool')}
                                                    />
                                                    <span className='ml-1'>Swimming Pool</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        checked={filters.amenities.gym}
                                                        onChange={() => handleAmenityChange('gym')}
                                                    />
                                                
                                                    <span className='ml-1'>Gym</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        checked={filters.amenities.are_bachlore}
                                                        onChange={() => handleAmenityChange('are_bachlore')}
                                                    />
                                                      <span className='ml-1'>Bachlore</span>
                                                    
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        checked={filters.amenities.are_non_veg}
                                                        onChange={() => handleAmenityChange('are_non_veg')}
                                                    />
                                                    <span className='ml-1'>Non Veg</span>
                                                    
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        checked={filters.amenities.are_peds}
                                                        onChange={() => handleAmenityChange('are_peds')}
                                                    />
                                                
                                                    <span className='ml-1'>Peds</span>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <button onClick={toggleModal} className="text-white inline-flex items-center bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                       
                                        Apply
                                    </button>
                                    <div onClick={() => clearAllFilters(false)} className="ml-2 text-white inline-flex items-center bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                        Clear All
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className='py-6 md:px-10 flex md:justify-between justify-center items-center'>
                <div className='border-2 border-gray-800 w-[300px] rounded-lg py-2'>
                    <input
                        type="text"
                        className='ps-3 bg-transparent placeholder-black border-none outline-none text-black text-base'
                        placeholder="Search Property Name"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />

                </div>
                <div onClick={toggleModal} className="py-2 px-8 uppercase me-2 mb-2 flex justify-center items-center gap-2  text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">
                    <MdFilterAlt className='font-bold' /> <span className='mt-0.5'>Filters</span>
                </div>
            </div>
            <div className='pb-4 bg-teal-300'>

                {
                    data.length !== 0 ?

                        filteredData.map((item, index) => {
                            const imgArray = JSON.parse(item?.images);
                            return (
                                <div key={index} className="flex items-center p-5 lg:px-10 lg:pt-4 lg:pb-0 overflow-hidden relative">
                                    {
                                        <div className={`absolute ${interestedItemIndex === index ? 'top-0' : '-top-[100%] '} left-[50%] translate-x-[-50%] z-[999] w-[80%] h-full border-2 bg-white transition-all duration-300`}>
                                            <div onClick={() => setInterestedItemIndex(null)} className=" absolute top-10 left-5 bg-white p-1 rounded-full shadow-xl shadow-gray-900/60">
                                                <MdClose className="text-2xl" />
                                            </div>
                                            <div className="h-full">
                                                {
                                                    index === interestedItemIndex && <IntresetedForm data={IntrestedData} type='project managment' click={() => setInterestedItemIndex(null)} intrested={interestedItemIndex !== null} />
                                                }
                                            </div>
                                        </div>
                                    }
                                    <div className="w-full max-w-8xl rounded bg-white shadow-xl p-10  lg:px-20 lg:py-6 mx-auto text-gray-800 relative md:text-left">
                                        <div className="md:flex items-center -mx-10">
                                            <div className="realtive  md:w-1/2 px-10 mb-10 md:mb-0">
                                                <div className="relative h-[400px] w-full">
                                                    <div className='absolute w-full h-full z-10 rounded-[2rem] overflow-hidden'>
                                                        <Swiper
                                                            grabCursor={true}
                                                            effect={'creative'}
                                                            loop={true}
                                                            autoplay={{
                                                                delay: 3000,
                                                                disableOnInteraction: false,
                                                            }}
                                                            creativeEffect={{
                                                                prev: {
                                                                    shadow: false,
                                                                    translate: [0, 0, -400],
                                                                },
                                                                next: {
                                                                    translate: ['100%', '0%', '0%'],
                                                                },
                                                            }}
                                                            modules={[Autoplay]}
                                                            className="mySwiper w-full h-full"
                                                        >
                                                            {
                                                                imgArray.map((item, index) => {
                                                                    return <SwiperSlide key={index + 1} className={style.swiperSlide}>
                                                                        <Image fill={true}
                                                                            sizes='100%'
                                                                            src={`https://skilliza.com/wscubetech/public/images/${item}`}
                                                                            alt='banner images' loading='lazy'
                                                                            style={{ objectFit: 'fill' }} />
                                                                    </SwiperSlide>
                                                                })
                                                            }

                                                        </Swiper>
                                                    </div>
                                                    <div className="border-4 border-yellow-200 absolute h-full w-full top-10 bottom-10 left-10 right-10 z-0"></div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 px-10">
                                                <div className="mb-10">
                                                    <h1 className="font-bold uppercase text-2xl mb-2">{item.property_name}</h1>
                                                    <h3 className="font-bold uppercase text-base mb-3">{item.property_address}</h3>
                                                    {/* <p className="text-base" dangerouslySetInnerHTML={createMarkup(item?.description)} /> */}
                                                    <p>
                                                        <WordLimit text={item.description} height='[200px]' />
                                                    </p>
                                                </div>
                                                <div className='grid md:grid-cols-2 grid-cols-1 gap-4 '>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Locality :</span>
                                                        <span>{item.locality}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Property Type :</span>
                                                        <span>{item.type}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Price :</span>
                                                        <span>{formatNumber(item.expected_price)}</span>
                                                    </div>
                                                    {
                                                        (item.property_type === 'r_rents' || item.property_type === 'r_sales')
                                                        &&
                                                        <>
                                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                <span>Bedrooms :</span>
                                                                <span>{item.Bedrooms}</span>
                                                            </div>
                                                        </>
                                                    }
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Available From :</span>
                                                        <span>{item.available_from}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Carpet Area :</span>
                                                        <span>{item.carpet_area} sqft</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Facing Side :</span>
                                                        <span>{item.facing}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Furnished Status :</span>
                                                        <span>{item.furnished}</span>
                                                    </div>
                                                    <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                        <span>Parking :</span>
                                                        <span>{item.parking}</span>
                                                    </div>
                                                    {
                                                        (item.property_type === 'c_rents' || item.property_type === 'c_sales')
                                                            ?
                                                            <>
                                                                <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                    <span>Washrooms :</span>
                                                                    <span>{item.washrooms}</span>
                                                                </div>
                                                                <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                    <span>Pantry Cafeteria :</span>
                                                                    <span>{item.pantry_cafeteria ? 'Yes' : 'No'}</span>
                                                                </div>
                                                            </>
                                                            :
                                                            <>
                                                                <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                    <span>Bathrooms :</span>
                                                                    <span>{item.Bathrooms}</span>
                                                                </div>
                                                                <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                    <span>Swimming pool :</span>
                                                                    <span>{item.swimming_pool ? 'Yes' : 'No'}</span>
                                                                </div>
                                                            </>
                                                    }
                                                    {
                                                        (item.property_type === 'r_sales' || item.property_type === 'c_sales')
                                                            ?
                                                            <>
                                                                <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                    <span>Possesions Status :</span>
                                                                    <span>{item.status}</span>
                                                                </div>
                                                                <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                    <span>Currently Leased out :</span>
                                                                    <span>{item.currently_leased_out ? 'Yes' : 'No'}</span>
                                                                </div>
                                                            </>
                                                            :
                                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                <span>Security Deposit :</span>
                                                                <span>{item.security_deposite}</span>
                                                            </div>
                                                    }
                                                    {
                                                        (item.property_type === 'c_rents' || item.property_type === 'c_sales')
                                                            ?
                                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                <span>Monthly Maintenance :</span>
                                                                <span>{item.maintenance_monthly}</span>
                                                            </div>
                                                            :
                                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                <span>Gym :</span>
                                                                <span>{item.gym ? 'Yes' : 'No'}</span>
                                                            </div>
                                                    }
                                                    {
                                                        (item.property_type === 'r_rents' || item.property_type === 'r_sales')
                                                        &&
                                                        <>
                                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                <span>Balconies :</span>
                                                                <span>{item.Balconies}</span>
                                                            </div>
                                                        </>


                                                    }
                                                    {
                                                        (item.property_type === 'r_rents')
                                                        &&
                                                        <>
                                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                <span>Are Pets Allowed :</span>
                                                                <span>{item.are_peds ? 'Yes' : 'No'}</span>
                                                            </div>
                                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                <span>Are Non Vegetarian Allowed :</span>
                                                                <span>{item.are_non_veg ? 'Yes' : 'No'}</span>
                                                            </div>
                                                            <div className='flex gap-2 items-center justify-start whitespace-nowrap'>
                                                                <span>Are Bachelor Preferred :</span>
                                                                <span>{item.are_bachlore ? 'Yes' : 'No'}</span>
                                                            </div>
                                                        </>


                                                    }



                                                </div>
                                                <div className="my-3 lg:my-5">
                                                    <button onClick={() => handleIntrseted(item, index)} className="bg-teal-500 rounded-full sm:p-2 p-1.5 sm:px-16 px-6 text-white">Interested</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })



                        :
                        <div className='max-w-screen h-[50vh] flex items-center justify-center'>
                            <div className='flex justify-center items-center gap-4 text-3xl'>
                                <AiOutlineFileSearch />
                                <h1 className='mt-1 uppercase'>

                                    {
                                        loading ?
                                            'Loading...'
                                            :
                                            'No Record Found'
                                    }
                                </h1>
                            </div>
                        </div>
                }




            </div>
        </section >
    );
}

export default Propert_list