"use client"
import React, { useEffect, useState } from 'react'
import PropertTable from '../../../components/table/PropertTable'
import { useGetLoggedUserQuery, useGetUserPropertyQuery } from '../../redux/services/userAuthApi';
import { getToken } from '../../redux/services/LocalStorageServices';
import { useMemo } from 'react';
import { commercialRents, commercialSales, residetialRents, residetialSales } from '../../../constants/property';

const Property_list = () => {
  const CommercialRentscolumns = useMemo(
    () => commercialRents,
    [],
  );
  const CommercialSalescolumns = useMemo(
    () => commercialSales,
    [],
  )
  const ResidentialRentscolumns = useMemo(
    () => residetialRents,
    [],
  )
  const ResidentialSalescolumns = useMemo(
    () => residetialSales,
    [],
  )
  const token = getToken('token')
  const [CommercialRentsData, setCommercialRentsData] = useState([])
  const [CommercialSalesData, setCommercialSalesData] = useState([])
  const [ResidentialRentsData, setResidentialRentsData] = useState([])
  const [ResidentialSalesData, setResidentialSalesData] = useState([])
  const {
    data: userProperty,
    isLoading,
    isSuccess,
    isError,
  } = useGetUserPropertyQuery(token);
  const getLoggedUserQuery = useGetLoggedUserQuery(token);

  useEffect(() => {
    if (isSuccess) {
      // Merge all arrays into a single array of objects
      const commercial_rents = [
        ...userProperty.commercial_rents,
        // ...userProperty.residential_rents,
        // ...userProperty.residential_sales,
      ];
      const commercial_sales = [
        ...userProperty.commercial_sales,
      ];
      const residential_rents = [
        ...userProperty.residential_rents,
      ]
      const residential_sales = [
        ...userProperty.residential_sales,
      ]
      setCommercialSalesData(commercial_sales)
      setCommercialRentsData(commercial_rents)
      setResidentialRentsData(residential_rents)
      setResidentialSalesData(residential_sales)
    }
  }, [isSuccess, userProperty]);
  const client = getLoggedUserQuery.isSuccess && (getLoggedUserQuery?.data?.data.clientbroker !== null || getLoggedUserQuery?.data?.data.clientuser !== null)

  return (
    <div>{client && isSuccess && !isLoading &&
      <>
        <PropertTable columns={CommercialRentscolumns} type='c_rents' heading='COMMERCIAL RENT PROPERTY' link="/project/commercial_rent" url="/project/commercial_rent/update" data={CommercialRentsData} />
        <PropertTable columns={CommercialSalescolumns} type='c_sales' heading='COMMERCIAL Sale PROPERTY' link="/project/commercial_sale" url="/project/commercial_sale/update" data={CommercialSalesData} />
        <PropertTable columns={ResidentialRentscolumns} type='r_rents' heading='Residential RENT PROPERTY' link="/project/residential_rent" url="/project/residential_rent/update" data={ResidentialRentsData} />
        <PropertTable columns={ResidentialSalescolumns} type='r_sales' heading='Residential Sale PROPERTY' link="/project/residential_sale" url="/project/residential_sale/update" data={ResidentialSalesData} />
      </>
    }</div>
  )
}

export default Property_list