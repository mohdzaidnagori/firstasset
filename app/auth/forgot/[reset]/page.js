
"use client"
import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useResetPasswordMutation } from "../../../redux/services/userAuthApi";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";



export default function Reset({ params }) {

  const [resetPassword, { isError, isLoading, isSuccess, isUninitialized }] = useResetPasswordMutation()

  const initialValues = {
    password: '',
    password_confirmation: '',
  };
  const router = useRouter()
  const token = params.reset;
  const validationSchema = Yup.object({
    password: Yup.string().required('Password is required'),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = async (values) => {
    values.token = token;
    try {
      const res = await resetPassword(values)
      console.log(res)
      if(res.data.status){
        router.push('/')
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  

  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <Image className="mr-2" src="/assets/logo.jpg" alt="logo first asset" width={200} height={200} />
        </Link>
        <div className="w-full bg-white rounded-xl shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Reset Your Password
            </h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              <Form className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <Field type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                  <ErrorMessage className="mt-3 text-red-700" name="password" component="div" />
                </div>
                <div>
                  <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password Confirmation</label>
                  <Field type="password" name="password_confirmation" id="password_confirmation" placeholder="password_confirmation" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                  <ErrorMessage className="mt-3 text-red-700" name="password_confirmation" component="div" />
                </div>

                <button type="submit" disabled={isLoading === true ? true : false} className={`w-full text-white  ${isLoading ? 'bg-teal-100' : 'bg-teal-500'} hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>Change Password</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  )
}