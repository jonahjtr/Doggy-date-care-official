import React, { useState } from "react";
import useGetAxios from "../hooks/useGetAxios";
// import PhotoUpload from "../components/forms/PhotoUpload";
import PhotoViews from "../components/profile_views/PhotoViews";
import MedsListViews from "../components/profile_views/MedsListViews";
import FileUploadModal from "../components/modals/FileUploadModal";
import FileViews from "../components/profile_views/FileViews";
import BreedViews from "../components/profile_views/breedViews";
const DogProfile = () => {
  const dogId = JSON.parse(localStorage.getItem("current_dog"));
  const { data, error } = useGetAxios(`/dogs/${dogId}`);
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
        <main className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-x-10">
          <PhotoViews dogId={dogId} photoList={data.dog_photos} />
          //-----------------------------
          <section className="w-full bg-darkGreen  h-[250px]  lg:h-[350px] 2xl:h-[400px] max-w-[1000px] mx-auto p-2 px-4 rounded-3xl mt-0 my-5 flex flex-col justify-evenly items-center border">
            <FileUploadModal url={`files/${dogId}`} title="Files" />
            <div className=" w-full   h-4/5 mb-3">
              <FileViews fileList={data.dog_files} />
            </div>
          </section>
          //-----------------------------
          <section className="w-full bg-darkGreen  h-[250px]  lg:h-[350px] 2xl:h-[400px] max-w-[1000px] mx-auto p-2 px-4 rounded-3xl mt-0 my-5 flex flex-col justify-evenly items-center border">
            <h1 className="bg-lightGreen p-2 px-4 mb-5 rounded-xl">
              characteristics/ notes
            </h1>
            <div className=" w-full border h-4/5 mb-3">
              list of notes, and characteristics of current dog
            </div>
          </section>
          //-----------------------------
          <section className="w-full bg-darkGreen  h-[350px] sm:h-[400px]  lg:h-[350px] 2xl:h-[400px] max-w-[1000px] mx-auto p-2 px-4 rounded-3xl mt-0 my-5 flex flex-col justify-evenly items-center border">
            <h1 className="bg-lightGreen p-2 px-4 mb-5 ">breed info</h1>
            <BreedViews breed_info={data.breed_info} />
          </section>
          //-----------------------------
          <section className="w-full bg-darkGreen  h-[250px]  lg:h-[350px] 2xl:h-[400px] max-w-[1000px] mx-auto mb-0 p-2 px-4 rounded-3xl mt-0 my-5 flex flex-col justify-evenly items-center border">
            <h1 className="bg-lightGreen p-2 px-4 mb-2 rounded-xl">
              meds list
            </h1>
            <div className=" py-2 rounded-xl w-full border h-4/5 mb-3">
              <MedsListViews list={data.medicines} />
            </div>
          </section>
          //-----------------------------
          <section className="w-full bg-darkGreen  h-[250px] lg:h-[350px] 2xl:h-[400px] max-w-[1000px] mx-auto mb-0 p-2 px-4 rounded-3xl mt-0 my-5 flex flex-col justify-evenly items-center border">
            <h1 className="bg-lightGreen p-2 px-4 mb-5 rounded-xl">calander</h1>
            <div className=" w-full border h-4/5 mb-3">
              in list form show all meds, if not show no meds
            </div>
          </section>
          //-----------------------------
        </main>
      </div>
    </div>
  );
};

export default DogProfile;

//information structure to be received

// {
//     "dog_id": 26,
//     "dog_name": "Rocky",
//     "dog_date_of_birth": "2018-09-10T05:00:00.000Z",
//     "dog_age": 4,
//     "dog_sex": "Male",
//     "dog_profile_picture": {
//         "type": "Buffer",
//         "data": [
//             114,
//             111,
//             99,
//             107,
//             121,
//             46,
//             106,
//             112,
//             103
//         ]
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
//         },
//         {
//             "medicine_id": 19,
//             "medicine_name": "Medicine 3 for Dog 26",
//             "medicine_dosage": "Dosage 3",
//             "medicine_frequency": "Frequency 3",
//             "medicine_start_date": "2023-03-01",
//             "medicine_end_date": "2023-03-05",
//             "medicine_instructions": "Instructions 3"
//         },
//         {
//             "medicine_id": 20,
//             "medicine_name": "Medicine 4 for Dog 26",
//             "medicine_dosage": "Dosage 4",
//             "medicine_frequency": "Frequency 4",
//             "medicine_start_date": "2023-04-01",
//             "medicine_end_date": "2023-04-05",
//             "medicine_instructions": "Instructions 4"
//         },
//         {
//             "medicine_id": 21,
//             "medicine_name": "Medicine 5 for Dog 26",
//             "medicine_dosage": "Dosage 5",
//             "medicine_frequency": "Frequency 5",
//             "medicine_start_date": "2023-05-01",
//             "medicine_end_date": "2023-05-05",
//             "medicine_instructions": "Instructions 5"
//         }
//     ]
// }
