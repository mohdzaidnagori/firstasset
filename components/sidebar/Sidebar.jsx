'use client'
import React, { useState } from "react";
import Link from "next/link";
import '../../app/globals.css'
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart ,FiUsers} from "react-icons/fi";
import { CiLocationArrow1 } from "react-icons/ci";

const Sidebar = () => {
  const menus = [
    { name: "Home", link: "/", icon: MdOutlineDashboard },
    { name: "User", link: "admin", icon: AiOutlineUser },
    { name: "Property Management", link: "/project/property_list", icon: FiMessageSquare },
    { name: "Fractional Properties", link: "admin/fractional", icon: TbReportAnalytics },
    { name: "Interested User", link: "admin/fractional_intrested", icon: FiFolder },
    { name: "Mandated Projects", link: "admin/sole", icon: FiShoppingCart },
    { name: "Testimonial", link: "admin/testimonial", icon: FiUsers },
    { name: "Locality", link: "/admin/locality", icon: CiLocationArrow1 },
    { name: "Logout", link: "/logout", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(false);

  return (
    <section className="flex gap-6">
      <div
        className={`bg-white min-h-screen ${open ? "w-72" : "w-[4.8rem]"
          } duration-500 text-black px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className={` ${menu?.margin && "mt-5"
                } group flex items-center text-lg  gap-3.5 font-medium p-3 hover:bg-teal-300 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${open && "hidden"
                  } absolute left-48 z-[999]  bg-cyan-700 font-semibold whitespace-pre text-white rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;