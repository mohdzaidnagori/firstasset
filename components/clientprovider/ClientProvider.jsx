'use client'
import React from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import BackToTop from '../BackToTop/BackToTop';


const ClientProvider = ({ children }) => {
    return (
        <>
            <BackToTop />
            <ProgressBar
                height="2px"
                color="#10b981"
                options={{ showSpinner: true }}
                shallowRouting
            />
            {children}
        </>
    )
}

export default ClientProvider