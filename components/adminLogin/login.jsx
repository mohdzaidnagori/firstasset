
"use client"
import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useGetLoggedUserQuery, useLoginAdminMutation } from "../../app/redux/services/userAuthApi";
import { getToken, storeToken } from "../../app/redux/services/LocalStorageServices";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";


export default function Login() {
  const router = useRouter()

  const token = getToken('admintoken')
  const [loginAdmin, { isError, isLoading, isSuccess, isUninitialized }] = useLoginAdminMutation()
  const getLoggedUserQuery = useGetLoggedUserQuery(token);

  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  const handleSubmit = async (values) => {
    const res = await loginAdmin(values)
    if (res.data && res.data.status === "success") {
      storeToken(res.data.token, 'admintoken')
      getLoggedUserQuery.refetch();
      toast.success(res.data.message, {
        duration: 4000,
      });
    }
    if (res.error && res.error.data.status === "failed") {
      toast.error(res.error.data.message)
    }
    if (res.data && res.data.status === "failed") {
      toast.error(res.data.message)
    }
    if (res.error && res.error.status === 'PARSING_ERROR') {
      toast.error('Unexpected Error please login some time later')
    }
    if (res.error && res.error.data.error === 'Unauthorized') {
        toast.error('invalid credentials')
      }
  };


  return (

    <>
      {
        getLoggedUserQuery.isError &&
        <section className="bg-white" >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            <Image className="mr-2" src="/assets/logo.jpg" alt="logo first asset" width={200} height={200} />
          </Link>
          <div className="w-full bg-white rounded-xl shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                    <ErrorMessage className="mt-3 text-red-700" name="email" component="div" />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <Field type="password" name="password" id="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    <ErrorMessage className="mt-3 text-red-700" name="password" component="div" />
                  </div>
                  <div className="flex items-center justify-between">

                    <Link href="/auth/forgot" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                  </div>
                  <button type="submit" disabled={isLoading === true ? true : false} className={`w-full text-white  ${isLoading ? 'bg-teal-100' : 'bg-teal-500'} hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <Link href="auth/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section >
      }
       
    </>

  )
}