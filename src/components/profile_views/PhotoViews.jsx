import React, { useState } from "react";
import useDeleteAxios from "../../hooks/useDeleteAxios";
import FileUploadModal from "../modals/FileUploadModal";
const PhotoViews = (props) => {
  const photoList = props.photoList;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    try {
      const result = await useDeleteAxios(
        `/dogs/photos/${selectedPhoto.photo_name}`
      );
      if (result) window.location.reload();
      console.log("Delete successful", result);
    } catch (error) {
      console.error("Delete failed", error.message);
    }
  };

  const snippet = Array.isArray(photoList) ? photoList : [];
  const first8Photos = snippet.slice(0, 8);

  return (
    <section className="w-full bg-darkGreen  h-[350px] sm:h-[400px]  lg:h-[350px] 2xl:h-[400px] max-w-[1000px] mx-auto p-2 px-4 rounded-3xl mt-0 my-5 flex flex-col justify-evenly items-center  ">
      <FileUploadModal url={`photos/${props.dogId}`} title="Photos" />

      <div className="w-full h-5/6 mb-3">
        <div className="overflow-hidden h-full  flex justify-center items-center">
          <div
            className={
              isModalOpen
                ? "h-full bg-lightBeige w-[30%] md:w-[60%] rounded-s-xl  p-1 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-2  no-scrollbar overflow-y-scroll"
                : "h-full  bg-lightBeige px-4 pb-3  grid rounded-xl grid-cols-3 sm:grid-cols-4 lg:grid-cols-3  no-scrollbar overflow-y-scroll"
            }
          >
            {first8Photos.length > 0 ? (
              first8Photos.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => openModal(item)}
                    className="relative cursor-pointer w-full  pt-3 px-2 "
                  >
                    <img
                      className=" w-full rounded-xl shadow-2xl"
                      src={item.photo_url}
                      alt=""
                    />
                  </div>
                );
              })
            ) : (
              <div>no photos</div>
            )}
          </div>

          {/* Modal Overlay */}
          {isModalOpen && selectedPhoto && (
            <div className=" h-[100%] w-full flex justify-center bg-black ">
              <div className="bg-lightBeige p-2 w-full h-full rounded-e-lg  ">
                <button className="" onClick={closeModal}>
                  Close
                </button>
                <button className="" onClick={handleDelete}>
                  delete
                </button>
                <img
                  className=" h-[90%] rounded-2xl  "
                  src={selectedPhoto.photo_url}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PhotoViews;
