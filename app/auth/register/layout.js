import Sidebar from "../../../components/sidebar/Sidebar";

export default function RegisterLayout({ children }) {
    return (
        <div className="bg-white sm:w-[60rem] h-[35rem] mt-[100px] sm:mt-0 rounded-xl shadow-xl p-4 flex flex-col sm:flex sm:flex-row justify-between">
            <Sidebar />
            {children}
        </div>
    )
}