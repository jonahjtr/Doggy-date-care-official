import React, { useState, useRef } from "react";
import useDeleteAxios from "../../../hooks/axios/useDeleteAxios";
import CreateModal from "../modals/CreateModal";
import FileUpload from "../../forms/FileUpload";
import useClickOutside from "../../../hooks/clickOutside";

const PhotoViews = ({ photoList, dogId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const componentRef = useRef(null);
  const deleteRef = useRef(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };
  useClickOutside(componentRef, () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  });

  useClickOutside(deleteRef, () => {
    setConfirmDelete(false);
  });
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
    <section
      ref={componentRef}
      className="lg:mx-4 shadow-xl w-full bg-primary  h-[350px] sm:w-[90%] max-w-[600px] sm:h-[500px]  mx-auto p-2 px-4 rounded-3xl mt-0 my-5 flex flex-col justify-evenly items-center  "
    >
      <CreateModal
        url={`photos/profile/${dogId}`}
        title="profile photo"
        component={<FileUpload />}
      />
      <CreateModal
        url={`photos/${dogId}`}
        title="Photos"
        component={<FileUpload />}
      />

      <div className="w-full h-5/6 mb-3">
        <div className="overflow-hidden h-full  flex justify-center items-center">
          <div
            className={
              isModalOpen
                ? "h-full bg-white w-[30%] sm:w-[60%] rounded-s-xl  p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  no-scrollbar overflow-y-scroll"
                : "h-full  bg-white px-4 pb-3  grid rounded-xl grid-cols-2 md:grid-cols-3 lg:grid-cols-3  no-scrollbar overflow-y-scroll"
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
              <div className="bg-white p-2 w-full h-full rounded-e-lg  ">
                <button className="" onClick={closeModal}>
                  Close
                </button>
                {confirmDelete ? (
                  <button ref={deleteRef} className="" onClick={handleDelete}>
                    are you sure?
                  </button>
                ) : (
                  <button className="" onClick={() => setConfirmDelete(true)}>
                    delete
                  </button>
                )}

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
