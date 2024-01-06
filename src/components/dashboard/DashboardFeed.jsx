import React from "react";
import ModernDogProfileCard from "./ModernDogProfileCard";
import Calendar from "../Calendar/Calendar";
import Header from "../Header";

const DashboardFeed = ({ data }) => {
  if (!data.dogs || data.dogs.length === 0)
    return <div> no user neededData</div>;
  const mView = "md:";
  return (
    <div className={`min-h-screen`}>
      <Header />
      <main
        className={`flex flex-col mobileBP:flex-row bg-primary  mobileBP:h-[calc(100vh_-_70px)]`}
      >
        <section className={`flex flex-col mobileBP:w-1/2 `}>
          <div className={`mobileBP:h-2/5 border `}>
            <div className={`p-8 md:p-0`}>hello, welcome back</div>
          </div>
          <div className={`mobileBP:h-3/5 border  flex items-center `}>
            <div className="w-4/5 mobileBP:h-5/6 max-h-[50vh]  mx-auto overflow-y-auto">
              {data.dogs.map((dog, index) => (
                <ModernDogProfileCard key={index} dog={dog} />
              ))}
            </div>
          </div>
        </section>
        <section className={`flex   flex-col mobileBP:w-1/2  `}>
          <div className={`mobileBP:h-2/5 border `}>
            <div>dates list</div>
          </div>
          <div className={`mobileBP:h-3/5 flex items-center border`}>
            <div className=" rounded-2xl  w-4/5 h-4/5 mx-auto overflow-y-hidden">
              <Calendar datesList={data.date_events} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardFeed;
// <div className="w-full mx-auto max-w-[480px] md:max-w-full overflow-x-none h-screen md:grid grid-cols-12">
//   <main className="col-span-10 md:grid md:grid-rows-6 md:grid-cols-12 min-h-screen w-full gap-y-20">
//     <div className=" col-start-2  col-span-full row-span-1 ">
//       <Header />
//     </div>
//     <div className="rounded-xl max-h-[50vh] col-start-2 col-span-4 row-start-2 row-span-2 bg-grey text-center">
//       <div className="p-8 md:p-0">hello, welcome back</div>
//     </div>
//     <div className="rounded-xl max-h-[50vh] col-start-2 no-scrollbar col-span-4 row-start-4 row-span-4 flex flex-col overflow-y-scroll mb-10">
//       {data.dogs.map((dog, index) => (
//         <ModernDogProfileCard key={index} dog={dog} />
//       ))}
//     </div>
//     <Calendar datesList={data.date_events} />
//     <div className="rounded-xl col-start-7 col-span-6 row-start-2 row-span-2 bg-grey text-center">
//       upcoming
//     </div>
//   </main>
// </div>
