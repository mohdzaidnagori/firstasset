import Image from "next/image";
import Link from "next/link";

export default function Register() {
    return (
        <section className="bg-white dark:bg-gray-900 -mt-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            <Image className="mr-2" src="/assets/logo.jpg" alt="logo first asset" width={200} height={200} />
          </Link>
          <div className="w-full bg-white rounded-[40px] shadow-2xl md:mt-0 sm:max-w-md lg:py-10">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="lg:text-[24px] text-base text-center font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                Please Select Registration Options
              </h1>
            <div className="flex flex-col gap-6">
                <Link href='auth/register/channel_partner' className="bg-teal-500 text-center p-2 rounded-full text-xl font-semibold text-white">Channel Partner</Link>
                <Link href='auth/register/channel_partner' className="bg-teal-500 text-center p-2 rounded-full text-xl font-semibold text-white">Channel Partner financial</Link>
                <Link href='auth/register/channel_partner' className="bg-teal-500 text-center p-2 rounded-full text-xl font-semibold text-white">Client</Link>
            </div>
            </div>
          </div>
        </div>
      </section>
    )
}