import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import HomePageFeed from "../components/HomePageFeed";
const HomePage = () => {
  const [user, setUser] = useState({});
  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    let isMounted = true;

    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/profile", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (isMounted && !Object.keys(user).length) {
          setUser(response.data[0]);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!user) return <div> no user</div>;
  return (
    <div className="min-w-[455px] h-full w-screen bg-darkGreen">
      <div className="w-full h-[50px]"></div>
      <HomePageFeed list={user.dogs} />
    </div>
  );
};

export default HomePage;

// useEffect(() => {
//   let isMounted = true;

//   const fetchUser = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/user/profile", {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       if (isMounted && !Object.keys(user).length) {
//         setUser(response.data[0]);
//       }
//     } catch (error) {
//       console.error("Error fetching user:", error);
//     }
//   };

//   fetchUser();

//   return () => {
//     isMounted = false;
//   };
// }, [accessToken]);

//     {Object.entries(user).map(([key, value]) => (
// <div key={key}>
//   <strong>{key}:</strong>{" "}
//   {Array.isArray(value) ? (
//     <ul>
//       {value.map((item, index) => (
//         <li key={index}>{JSON.stringify(item)}</li>
//       ))}
//     </ul>
//   ) : typeof value === "object" ? (
//     <div>{JSON.stringify(value)}</div>
//   ) : (
//     JSON.stringify(value)
//   )}
//   </div>
// ))}
