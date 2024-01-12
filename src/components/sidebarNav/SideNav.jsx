import React from "react";
import SideBarButton from "./sideBarButton";
import { useLocation } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import { useAtom } from "jotai";
import { isLoggedInAtom } from "../../jotai/statusStates";

import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import PetsSharpIcon from "@mui/icons-material/PetsSharp";
import PhotoLibrarySharpIcon from "@mui/icons-material/PhotoLibrarySharp";
import MedicationSharpIcon from "@mui/icons-material/MedicationSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import FileCopySharpIcon from "@mui/icons-material/FileCopySharp";

const SideNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const location = useLocation();
  const { pathname } = location;

  const handleLogout = () => {
    useLogout();
    setIsLoggedIn(false);
  };

  return (
    <div className="hidden max-h-screen relative md:inline max-w-[255.99px] min-h-screen flex flex-col grow   antialiased  ">
      <div className="  bg-primary flex flex-col  top-0 left-0 w-64  h-full ">
        <div className="flex  items-center justify-center h-14 ">
          <div>Logo here </div>
        </div>
        <div className="overflow-y-auto  flex flex-col justify-between overflow-x-hidden flex-grow ">
          <section>
            <div className="h-[150px] flex flex-col justify-evenly">
              <div className="w-[75px] h-[75px] rounded-full border mx-auto"></div>
              <h1 className="mx-auto w-fit"> name here</h1>
            </div>
            <div className="flex pl-2  flex-row items-center h-8">
              <div className=" font-light tracking-wide ">Pages</div>
            </div>
            <SideBarButton
              icon={<HomeSharpIcon />}
              pathName={"/dashboard"}
              currentPage={pathname}
              buttonName={"Dashboard"}
            />
            <SideBarButton
              pathName={"/all-dogs"}
              icon={<PetsSharpIcon />}
              currentPage={pathname}
              buttonName={"All My Dogs"}
            />
            <SideBarButton
              pathName={"/all-photos"}
              icon={<PhotoLibrarySharpIcon />}
              currentPage={pathname}
              buttonName={"Photos"}
            />
            <SideBarButton
              pathName={"/all-meds"}
              icon={<MedicationSharpIcon />}
              currentPage={pathname}
              buttonName={"Medicine"}
            />
            <SideBarButton
              pathName={"/all-dates"}
              icon={<CalendarMonthSharpIcon />}
              currentPage={pathname}
              buttonName={"Dates"}
            />
            <SideBarButton
              pathName={"/all-files"}
              icon={<FileCopySharpIcon />}
              currentPage={pathname}
              buttonName={"Files"}
            />
            <SideBarButton
              pathName={"/dog-profile"}
              icon={<PetsSharpIcon />}
              currentPage={pathname}
              buttonName={"Doggy Profile"}
            />
          </section>
          <section>
            <div className="flex pl-2 flex-row items-center h-8">
              <div className="text-sm font-light text-center tracking-wide ">
                Settings
              </div>
            </div>

            <SideBarButton
              icon={<SettingsSharpIcon />}
              currentPage={pathname}
              buttonName={"settings"}
            />
            <SideBarButton
              icon={<AccountBoxSharpIcon />}
              currentPage={pathname}
              buttonName={"account"}
            />
            <SideBarButton
              pathName={"/"}
              onClick={handleLogout}
              currentPage={pathname}
              icon={<LogoutSharpIcon />}
              buttonName={"logout"}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
