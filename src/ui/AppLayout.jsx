import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
    return (
        <div className="grid grid-rows-[auto_1fr] bg-darkBackground min-h-screen">
            <Header />
            <main className="overflow-auto p-4 sm:p-6 md:p-8 lg:p-12">
                <div>
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
