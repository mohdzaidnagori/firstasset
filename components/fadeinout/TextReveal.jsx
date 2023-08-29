"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TextReveal = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='md:py-6 md:pb-14 pb-10 md:w-[70%] w-[90%] text-left text-2xl'>
            <div data-aos="fade-right" className="my-20">
                First&#44; we identify high-performance assets with growth potential across prime locations in
                India.
            </div>
            <div data-aos="fade-up" className="my-20">
                Once you show interest in this opportunity on FIRST/ASSET&#44; your KYC will be
                required and once verified&#44; you will receive all legal documentation pertaining to the
                property and SPV-related documents for your perusal and scrutiny.
            </div>
            <div data-aos="fade-left" className="my-20">
                After you decide to move forward with the opportunity and block your investment&#44; you are
                requested to e-sign a binding Expression of Interest (EOI) and transfer the initial 10% token
                as advance.
            </div>
            <div data-aos="fade-right" className="my-20">
                Once 100% commitment is received from interested investors&#44; the opportunity is considered
                to be fully funded.
            </div>
            <div data-aos="fade-left" className="my-20">
                You will then be required to transfer the remaining 90% amount.
            </div>
            <div data-aos="fade-up" className="my-20">
                Your investment amount will then be routed through an escrow mechanism to the share
                subscription accounts and ultimately&#44; to the current account of the SPV.
            </div>
            <div data-aos="fade-right" className="my-20">
                You will be allocated equity shares and compulsorily convertible debentures (CCDs) in the
                Private Limited Company.
            </div>
            <div data-aos="fade-left" className="my-20">
                The SPV will then proceed to purchase the asset.
            </div>
            <div data-aos="fade-up" className="my-20">
                First/Asset will provide complete asset management services to the SPV and take care of all
                property-related management issues.
            </div>
            <div data-aos="fade-right" className="my-20">
                All SPV related documents will be kept safely in the custody of the Custodian/Trusteeship
                partner who will also manage the complete fund flow to &amp; from the SPV.
            </div>
            <div data-aos="fade-left" className="my-20">
                You will be allocated equity shares and compulsorily convertible debentures (CCDs) in the
                Private Limited Company.
            </div>
            <div data-aos="fade-up" className="my-20">
                The return on your investment is in the form of interest on debentures and is paid monthly
                directly into your bank account.
            </div>
            <div data-aos="fade-right" className="my-20">
                You can exit your investment once the initial lock-in period is complete. This can be done in
                three different ways  Asset sale&#44; private sale &amp; resale.
            </div>
            <div data-aos="fade-left" className="my-20">
                You will be allocated equity shares and compulsorily convertible debentures (CCDs) in the
                Private Limited Company.
            </div>
            <div data-aos="fade-up" className="my-20">
                You will be allocated equity shares and compulsorily convertible debentures (CCDs) in the
                Private Limited Company.
            </div>
        </div>
    )
}

export default TextReveal