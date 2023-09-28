"use client"
import { useState } from "react"
import { BiArrowBack, BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi"
import DatePicker from "tailwind-datepicker-react"



export const DatePickers = ({ selectedDate, setSelectedDate, updateDate }) => {
    const [show, setShow] = useState(false)
    function updatingDate() {
        const inputDate = `1 ${updateDate}`
        var dateObj = new Date(inputDate);

        // Extract year, month, and day components from the Date object
        var year = dateObj.getFullYear();
        var month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so add 1
        var day = dateObj.getDate().toString().padStart(2, '0');

        // Create the formatted date string
        var formattedDate = year + '-' + month + '-' + day;
        return formattedDate
    }
    updatingDate()
    const options = {
        title: "Select Your date",
        autoHide: true,
        todayBtn: false,
        clearBtn: true,
        maxDate: new Date("2050-01-01"),
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
        defaultDate: new Date(`${updateDate == undefined ? "2022-01-01" : updatingDate()}`),
        language: "en",
    }
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