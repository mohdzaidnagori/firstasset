
"use client"
import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSendPasswordResetEmailMutation } from "../../redux/services/userAuthApi";
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation'

export default function Forgot() {

  const [sendPasswordResetEmail, { isError, isLoading, isSuccess, isUninitialized }] = useSendPasswordResetEmailMutation()

  const initialValues = {
    email: '',
  };
  const router = useRouter()
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });
  console.log(isLoading)
  const handleSubmit = async (values) => {
    console.log(values);
    const res = await sendPasswordResetEmail(values)
    console.log(res)
    if (res.error && res.error.data.status === 'failed') {
      toast.error(res.error.data.message,{
        duration: 4000,
      });
    }
    if (res.data && res.data.status === 'success') {
      toast.success(res.data.message,{
        duration: 4000,
      });
      router.push('/')
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
            <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Type your email id below to receive verification link
            </h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              <Form className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                  <ErrorMessage className="mt-3 text-red-700" name="email" component="div" />
                </div>
                  <button type="submit" disabled={isLoading === true ? true : false} className={`w-full text-white  ${isLoading ? 'bg-teal-100' : 'bg-teal-500'} hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>SUBMIT</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  )
}