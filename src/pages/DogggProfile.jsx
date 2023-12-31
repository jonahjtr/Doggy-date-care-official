import React, { useState } from "react";
import useGetAxios from "../hooks/axios/useGetAxios";
import PhotoViews from "../components/dogProfile/profile_views/PhotoViews";
import MedsListViews from "../components/dogProfile/profile_views/MedsListViews";
import FileViews from "../components/dogProfile/profile_views/FileViews";
import BreedViews from "../components/dogProfile/profile_views/breedViews";
import NotesViews from "../components/dogProfile/profile_views/NotesViews";
import CalendarViews from "../components/dogProfile/profile_views/CalendarViews";
const DogggProfile = () => {
  const dogId = JSON.parse(localStorage.getItem("current_dog"));
  const { data, error } = useGetAxios(`/dogs/${dogId}`);
  console.log(data);
  localStorage.setItem("current_dog_data", JSON.stringify(data));
  return (
    <div className="  bg-darkGreen w-full h-full min-h-screen">
      <div className="bg-lightGreen  pb-8 min-h-screen max-w-[1800px]  mx-auto">
        <section className="w-full h-[250px] lg:h-[350px]  rounded-xl   flex flex-col justify-evenly items-center">
          <div className=" w-[130px] h-[130px] lg:h-[200px] lg:w-[200px]  rounded-full bg-lightBeige "></div>
          <div className=" bg-darkGreen lg:text-2xl  p-2 px-4 lg:px-8 lg:py-3 rounded-xl">
            {data.dog_name}
          </div>
        </section>
        <main className="grid bg-lightBeige pt-10 px-10 lg:grid-cols-2 2xl:grid-cols-3 gap-x-10">
          <PhotoViews dogId={dogId} photoList={data.dog_photos} />
          <FileViews dogId={dogId} fileList={data.dog_files} />
          <NotesViews />
          <BreedViews breed_info={data.breed_info} />
          <MedsListViews dogId={dogId} medicineList={data.medicines} />
          <CalendarViews />
        </main>
      </div>
    </div>
  );
};

export default DogggProfile;

//information structure to be received

// {
//     "dog_id": 26,
//     "dog_name": "Rocky",
//     "dog_date_of_birth": "2018-09-10T05:00:00.000Z",
//     "dog_age": 4,
//     "dog_sex": "Male",
//     "dog_profile_picture": {
//     },
//     "breed_info": {
//         "breed_id": 60,
//         "breed_name": "English Springer Spaniel",
//         "size": "Medium",
//         "characteristics": {
//             "CoatType": "Medium-length and water-repellent",
//             "Appearance": "Elegant and cheerful"
//         },
//         "temperament": "Friendly, intelligent, and eager to please",
//         "exercise_needs": "Moderate exercise needs; enjoys play and retrieving",
//         "health_issues_and_lifespan": "May have ear and eye issues; Lifespan: 12-14 years",
//         "grooming_needs": "Regular grooming and ear cleaning required",
//         "training_info": "Responsive to training, especially for hunting and retrieving",
//         "diet_and_nutrition": "Balanced diet with lean protein and grains",
//         "history": "Bred in England as a hunting and flushing dog",
//         "lifestyle_compatibility": "Great for families and those seeking an active companion",
//         "rescue_and_adoption_resources": "http://rescue.example.com/english-springer-spaniel",
//         "average_height": "19-20 inches (male), 18-19 inches (female)",
//         "average_weight": "50-55 pounds (male), 40-45 pounds (female)"
//     },
//     "medicines": [
//         {
//             "medicine_id": 17,
//             "medicine_name": "Medicine 1 for Dog 26",
//             "medicine_dosage": "Dosage 1",
//             "medicine_frequency": "Frequency 1",
//             "medicine_start_date": "2023-01-01",
//             "medicine_end_date": "2023-01-05",
//             "medicine_instructions": "Instructions 1"
//         },
//         {
//             "medicine_id": 18,
//             "medicine_name": "Medicine 2 for Dog 26",
//             "medicine_dosage": "Dosage 2",
//             "medicine_frequency": "Frequency 2",
//             "medicine_start_date": "2023-02-01",
//             "medicine_end_date": "2023-02-05",
//             "medicine_instructions": "Instructions 2"
//         }
//     ]
// }
