import React from "react";
import DogProfileCard from "./cards/DogProfileCard";

const HomePageFeed = ({ list }) => {
  const doglist = [
    {
      dog_name: "Buddy",
      dog_date_of_birth: "2019-05-15",
      dog_age: 3,
      dog_sex: "Male",
      dog_breed: "Labrador Retriever",
      dog_profile_picture:
        "https://www.usatoday.com/gcdn/media/2020/02/25/USATODAY/usatsports/MotleyFool-TMOT-0107af3a-pet-dog-food.jpg?width=660&height=440&fit=crop&format=pjpg&auto=webp  ",
    },
    {
      dog_name: "Daisy",
      dog_date_of_birth: "2020-02-22",
      dog_age: 2,
      dog_sex: "Female",
      dog_breed: "Golden Retriever",
      dog_profile_picture:
        "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dog_name: "Rocky",
      dog_date_of_birth: "2018-11-10",
      dog_age: 4,
      dog_sex: "Male",
      dog_breed: "German Shepherd",
      dog_profile_picture:
        "https://images.unsplash.com/photo-1597633425046-08f5110420b5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dog_name: "Luna",
      dog_date_of_birth: "2021-07-05",
      dog_age: 1,
      dog_sex: "Female",
      dog_breed: "Siberian Husky",
      dog_profile_picture:
        "https://images.unsplash.com/photo-1554456854-55a089fd4cb2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dog_name: "Max",
      dog_date_of_birth: "2017-09-18",
      dog_age: 5,
      dog_sex: "Male",
      dog_breed: "Bulldog",
      dog_profile_picture:
        "https://plus.unsplash.com/premium_photo-1680542687469-350ab49cb75b?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  // console.log(list);
  return (
    <div className="md:py-[20px] bg-lightGreen flex flex-col justify-between w-full sm:px-24 md:max-w-[80%] xl:[70%] min-h-[90%] mx-auto border-black">
      {doglist ? (
        doglist.map((data) => <DogProfileCard key={data.name} data={data} />)
      ) : (
        <p>No dogs available.</p>
      )}
    </div>
  );
};

export default HomePageFeed;
