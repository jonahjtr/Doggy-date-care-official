import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import useGetAxios from "../hooks/axios/useGetAxios";
import SideNav from "../components/sidebarNav/SideNav";

const AllMeds = () => {
  const [medsList, setMedsList] = useState([]);

  const { data, error } = useGetAxios("/user/medicines");

  useEffect(() => {
    if (data.medicines && data.medicines.length > 0) {
      setMedsList(data.medicines);
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
            {medsList.map((med, index) => {
              return (
                <div className=" w-[400px] border h-fit  " key={index}>
                  <p>{med.name}</p>
                  <p>{med.instructions}</p>
                  <p>{med.description ? med.description : "description"}</p>
                  <p>{med.start_date ? med.start_date : "start date"}</p>
                  <p>{med.end_date ? med.end_date : "end date"}</p>
                  <p>{med.dosage ? med.dosage : "dosage"}</p>
                  <p>{med.frequency ? med.frequency : "frequency"}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMeds;

// {
//   photosList.map((photo, index) => {
//     if (index < 5) return <div key={index}>bad image url</div>;
//     return (
//       <div className=" " key={index}>
//         <img
//           className="w-[100px] mx-4 h-[100px]"
//           src={photo.photo_url}
//           alt={photo.photo_name}
//         />
//       </div>
//     );
//   });
// }
