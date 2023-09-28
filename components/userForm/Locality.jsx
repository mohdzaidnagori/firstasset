import axios from '../../app/redux/services/axios';
import { ErrorMessage, useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react'
import Select from 'react-select'

const Locality = ({name,label ,defaults,disabled}) => {
    const [selectedOption, setSelectedOption] = useState(defaults);
    const [data, setData] = useState([])

  
            const options = data.map((item) => {
                return {
                    value: item.location, label: item.location
                }
            })
        

    const loaclity_view = async () => {
        const url = 'admin/viewlocality';
        await axios.get(url)
            .then((response) => {
                setData(response.data.data)
            })
            .catch((error) => {
                    console.log(error);
            })
    }
    useEffect(() => {
        loaclity_view()
    }, [])
   

    const formik = useFormikContext();
    const handleTypeSelect = e => {
        setSelectedOption(e.value);
        formik.setFieldValue(name, e.value);
      };
    return (
        <div>
         <label className={`block py-2 text-base lg:text-base font-medium text-gray-900`}>{label}</label>
            <Select
                id={name}
                name={name}
                isDisabled={disabled === 'disable' ? true : false }
                options={options}
                value={options.filter(function (option) {
                    return option.value === selectedOption;
                })}
                onChange={handleTypeSelect}
            />
            <ErrorMessage name={name} className='mt-1 text-red-700' component="div" />

        </div>
    )
}

export default Locality