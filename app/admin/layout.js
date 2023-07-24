import AdminProvider from "../redux/adminProvider/AdminProvider";
import Sidebar from "../../components/sidebar/Sidebar";

export default function AdminLayout({ children }) {
    return (
        <AdminProvider>
            <div className="flex">
                <Sidebar />
                {children}
            </div>
        </AdminProvider>
    )
}