import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import Header from "@/components/header";

const AppLayout = () => {
    return (
        <SidebarProvider >
            <AppSidebar />
            <main className="w-full mx-auto flex flex-col">
                <Header />
                <div className="flex-1 w-full pb-15">
                    <Outlet />
                </div>
            </main>

        </SidebarProvider>
    );
};

export default AppLayout;