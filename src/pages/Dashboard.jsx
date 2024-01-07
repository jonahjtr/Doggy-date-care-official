import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGetAxios from "../hooks/axios/useGetAxios";
import DashboardFeed from "../components/dashboard/DashboardFeed";
import { isLoggedIn, userObject } from "../jotai/statusStates";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import SideNav from "../components/sidebarNav/SideNav";

const Dashboard = () => {
  const navigate = useNavigate();

  const [LoggedIn, setLoggedIn] = useAtom(isLoggedIn);
  if (LoggedIn === false) {
    navigate("/");
  }
  const { data, error } = useGetAxios("/user/profile");

  if (!data || error) {
    setLoggedIn(false);
    return <div> no user neededData {error}</div>;
  }
  console.log(error.code);
  // const setdata = useSetAtom(userObject);
  // setdata(data);

  return (
    <div className="flex ">
      <SideNav />
      <div className="grow">
        {" "}
        <DashboardFeed data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
