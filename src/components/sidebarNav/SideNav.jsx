import React from "react";
import SideBarButton from "./sideBarButton";
import { useAtomValue } from "jotai";
import { PageNameAtom } from "../../jotai/statusStates";
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
  const pageName = useAtomValue(PageNameAtom);

  return (
    <div class="hidden md:inline max-w-[255.99px] min-h-screen flex flex-col grow  antialiased  ">
      <div class="fixed bg-primary flex flex-col  top-0 left-0 w-64 h-full ">
        <div class="flex items-center justify-center h-14 ">
          <div>Logo here </div>
        </div>
        <div class="overflow-y-auto  flex flex-col justify-between overflow-x-hidden flex-grow ">
          <section>
            <div className="h-[150px] flex flex-col justify-evenly">
              {" "}
              <div className="w-[75px] h-[75px] rounded-full border mx-auto"></div>
              <h1 className="mx-auto w-fit"> name here</h1>
            </div>
            <div class="flex flex-row items-center h-8">
              <div class=" font-light tracking-wide ">Pages</div>
            </div>
            <SideBarButton
              icon={<HomeSharpIcon />}
              currentPage={pageName}
              buttonName={"Dashboard"}
            />
            <SideBarButton
              icon={<PetsSharpIcon />}
              currentPage={pageName}
              buttonName={"Dogs"}
            />
            <SideBarButton
              icon={<PhotoLibrarySharpIcon />}
              currentPage={pageName}
              buttonName={"Photos"}
            />
            <SideBarButton
              icon={<MedicationSharpIcon />}
              currentPage={pageName}
              buttonName={"Medicine"}
            />
            <SideBarButton
              icon={<CalendarMonthSharpIcon />}
              currentPage={pageName}
              buttonName={"Dates"}
            />
            <SideBarButton
              icon={<FileCopySharpIcon />}
              currentPage={pageName}
              buttonName={"Files"}
            />
          </section>
          <section>
            <div class="flex flex-row items-center h-8">
              <div class="text-sm font-light text-center tracking-wide ">
                Settings
              </div>
            </div>

            <SideBarButton
              icon={<SettingsSharpIcon />}
              buttonName={"settings"}
            />
            <SideBarButton
              icon={<AccountBoxSharpIcon />}
              buttonName={"account"}
            />
            <SideBarButton icon={<LogoutSharpIcon />} buttonName={"logout"} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
