// 'use client'
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
// import React, { useState } from 'react'
// import { auth } from '../../firebase';
// import { setConfirmationResult } from '../redux/features/otpSlice';
// import { useDispatch, useSelector } from 'react-redux';

// const Fire = () => {
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [otp, setotp] = useState('')

//     const handleChange = (event) => {
//         setMobileNumber(event.target.value);
//     };
//     function onCaptchVerify() {
//         if (!window.recaptchaVerifier) {
//             window.recaptchaVerifier = new RecaptchaVerifier(
//                 "recaptcha-container",
//                 {
//                     size: "invisible",
//                     callback: (response) => {
//                         onSignup();
//                     },
//                     "expired-callback": () => { },
//                 },
//                 auth
//             );
//         }
//     }
//     const dispatch = useDispatch();
//     function onSignup(event) {
//         event.preventDefault();
//         onCaptchVerify();

//         const appVerifier = window.recaptchaVerifier;

//         const formatPh = "+91" + mobileNumber;

//         signInWithPhoneNumber(auth, formatPh, appVerifier)
//             .then((result) => {
//                 // Dispatch the setConfirmationResult action to store the confirmation result in Redux
//                 dispatch(setConfirmationResult(result)); // Set the confirmation result in state
//                 console.log("OTP sent successfully!");
//             })
//             .catch((error) => {
//                 console.log("Error sending OTP:", error);
//             });
//     }
//     const confirmationResult = useSelector((state) => state.otp);
//     function onOTPVerify(event) {
//         event.preventDefault();
//         if (confirmationResult) {
//             confirmationResult
//                 .confirm(otp)
//                 .then((res) => {
//                     console.log(res);
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         } else {
//             console.log("Confirmation result is not available");
//         }
//     }

//     return (
//         <>
//             <div id="recaptcha-container"></div>
//             <form onSubmit={onSignup}>
//                 <label>
//                     Mobile Number:
//                     <input
//                         type="tel"
//                         value={mobileNumber}
//                         onChange={handleChange}
//                         required
//                     />
//                 </label>
//                 <button type="submit">Submit</button>
//             </form>
//             <form onSubmit={onOTPVerify}>
//                 <label>
//                     otp:
//                     <input
//                         type="text"
//                         value={otp}
//                         onChange={(event) => setotp(event.target.value)}
//                         required
//                     />
//                 </label>
//                 <button type="submit">Submit</button>
//             </form>
//         </>
//     )


// }

// export default Fire