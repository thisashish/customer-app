// app/dashboard/showEmployee/layout.js
import Sidebar from '../components/Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen w-full">
        <div className="flex flex-row w-full">
          <div className="h-full basis-1/6">
            <Sidebar role={role} />
          </div>
          <div className="basis-5/6 flex flex-col bg-bodyBackground grow-0">
            <div className="w-full z-10 bg-bodyBackground ">
              <Navbar />
            </div>
            <div className="pt-[150px] z-0 h-full bg-bodyBackground">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
};
export default Layout;
