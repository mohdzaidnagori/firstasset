"use client"
import { useState } from "react"
import { BiArrowBack, BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi"
import DatePicker from "tailwind-datepicker-react"

const options = {
    title: "Select Your date",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
        background: "bg-white dark:bg-gray-800",
        todayBtn: "",
        clearBtn: "",
        icons: "",
        text: "",
        disabledText: "",
        input: "",
        inputIcon: "",
        selected: "",
    },
    icons: {
        // () => ReactElement | JSX.Element
        prev: () => <span><BiArrowFromRight /></span>,
        next: () => <span><BiArrowFromLeft /></span>,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date("2022-01-01"),
    language: "en",
}

export const DatePickers = ({ selectedDate, setSelectedDate }) => {
    const [show, setShow] = useState(false)
    const handleChange = (selectedDate) => {
        const formattedDate = selectedDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            timeZone: "UTC",
          });
      
          setSelectedDate(formattedDate);
    }
    const handleClose = (state) => {
        setShow(state)
    }

    return (
        <div>
            <DatePicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
        </div>
    )
}