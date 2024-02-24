import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import useGetAxios from "../hooks/axios/useGetAxios";
import SideNav from "../components/sidebarNav/SideNav";

const AllFiles = () => {
  const [fileList, setFileList] = useState([]);

  const { data, error } = useGetAxios("/user/files");

  useEffect(() => {
    if (data && data.length > 0) {
      setFileList(data);
    }
  }, [data]);

  if (!data || data.length < 1 || error) {
    return <div> no user neededData {error}</div>;
  }

  return (
    <div className="flex ">
      <SideNav />
      <div className="grow">
        <div className=" mobileBP:h-[calc(100vh-_70px)] bg-white ">
          <Header />
          <div className=" h-[calc(100vh-_56.5px)]  overflow-y-auto  ">
            {fileList.map((file, index) => {
              return (
                <div className="w-[400px]  h-[50px] border  " key={index}>
                  <p>{file.file_nickname ? file.file_nickname : "file name"}</p>
                  <p>{file.upload_date ? file.upload_date : "upload date"}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFiles;
