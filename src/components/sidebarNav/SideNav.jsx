import React, { useState, useEffect } from "react";
import SideBarButton from "./sideBarButton";
import DropDownButton from "./DropDownButton";
import { useLocation } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import { useAtom } from "jotai";
import { isLoggedInAtom, isOpenAtom } from "../../jotai/statusStates";

import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import PetsSharpIcon from "@mui/icons-material/PetsSharp";
import PhotoLibrarySharpIcon from "@mui/icons-material/PhotoLibrarySharp";
import MedicationSharpIcon from "@mui/icons-material/MedicationSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import FileCopySharpIcon from "@mui/icons-material/FileCopySharp";

const SideNav = ({ open }) => {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const location = useLocation();
  const { pathname } = location;

  const handleLogout = () => {
    useLogout();
    setIsLoggedIn(false);
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleDropDown = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const dropDownList = ["/all-photos", "/all-meds", "/all-files"];
  const showModule = isMenuOpen || dropDownList.includes(pathname);
  const displayDropDown = ["/dog-profile", "/all-dogs"];
  return (
    <div
      className={`fixed  md:relative h-screen top-0 left-0 w-64 h-full bg-primary transition-transform transform ${
        isOpen
          ? " transition-transform transform translate-x-0 "
          : "  -translate-x-full"
      } md:transition-transform md:transform md:translate-x-0 md:-translate-x-full "
`}
      style={{
        zIndex: 9999,
      }}
    >
      <div className="  bg-primary flex flex-col  top-0 left-0 w-64  h-full ">
        <div className="flex  items-center  h-14 ">
          <div className="mx-auto ">Logo here </div>
          <button
            className=" text-sm  md:hidden float-right  absolute left-[83%] pr-2 "
            onClick={() => setIsOpen(false)}
          >
            close
          </button>
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
            {displayDropDown.includes(pathname) ||
            dropDownList.includes(pathname) ? (
              <DropDownButton
                isMenuOpen={isMenuOpen}
                pathName={"/all-dogs"}
                extraPathName={"/dog-profile"}
                allExtraPathNames={["/all-photos", "/all-meds", "/all-files"]}
                currentPage={pathname}
                onClick={handleDropDown}
                buttonName={"Dog House"}
              />
            ) : (
              <SideBarButton
                icon={<PetsSharpIcon />}
                pathName={"/all-dogs"}
                currentPage={pathname}
                buttonName={"Dog House"}
              />
            )}

            {showModule && (
              <div className="bg-white ml-2 rounded-bl-xl mb-2">
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
                  pathName={"/all-files"}
                  icon={<FileCopySharpIcon />}
                  currentPage={pathname}
                  buttonName={"Files"}
                />
              </div>
            )}

            <SideBarButton
              pathName={"/all-dates"}
              icon={<CalendarMonthSharpIcon />}
              currentPage={pathname}
              buttonName={"Dates"}
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

// <DropDownButton
//   onClick={handleDropDown}
//   icon={<HomeSharpIcon />}
//   isMenuOpen={isMenuOpen}
//   buttonName={"Dashboard"}
// />
