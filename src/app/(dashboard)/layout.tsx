
import Sidebar from "@/components/sidebar";

interface DashboardLayout{
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayout) => {
  return (
    <div className="min-h-screen">
      <div className="flex w-full h-full">

        <div className="fixed left-0 top-0 hidden lg:block lg-w-[270px] h-full overflow-y-auto">
          <Sidebar />
        </div>

        <div className="lg:pl-[270px]">
          <div className="mx-auto max-w-screen-2xl h-full">

            {/* Navbar */}
            <main className="h-full py-8 px-6 flex flex-col">
              {children}
            </main>
          </div>
        </div>

      </div>
    </ div>
  )
}

export default DashboardLayout