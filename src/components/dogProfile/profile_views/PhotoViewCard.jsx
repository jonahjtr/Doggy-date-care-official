import React, { useState, useRef } from "react";
import useDeleteAxios from "../../../hooks/axios/useDeleteAxios";
import CreateModal from "./modals/CreateModal";
import PhotoUpload from "../../forms/PhotoUpload";
import useClickOutside from "../../../hooks/clickOutside";
import LoadingComponent from "../../utils/LoadingComponent";

const PhotoViewCard = ({ title, photoList, dogId, loading }) => {
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

  // <CreateModal
  //   url={`photos/profile/${dogId}`}
  //   title="profile photo"
  //   component={<FileUpload />}
  // />;

  return (
    <section
      ref={componentRef}
      className="  bg-primary w-[90%] h-full mx-auto   p-2 rounded-2xl flex flex-col justify-evenly items-center  "
    >
      <div className="w-full h-1/5">
        <CreateModal
          url={`photos/${dogId}`}
          title={"Photos"}
          component={<PhotoUpload />}
        />
      </div>
      <div className="w-full rounded-xl  max-h-[30vh] h-4/5 bg-white">
        {loading ? (
          <LoadingComponent />
        ) : (
          <div className="w-full h-full   ">
            <div className="overflow-hidden h-full  flex justify-center ">
              <div
                className={
                  isModalOpen
                    ? "hidden"
                    : "h-[90%] w-full mx-auto  bg-white  rounded-xl grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 no-scrollbar overflow-y-auto "
                }
              >
                {first8Photos.length > 0 ? (
                  first8Photos.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => openModal(item)}
                        className=" cursor-pointer  pt-3 px-2 "
                      >
                        <img
                          className="  w-full rounded-xl shadow-2xl"
                          src={item.photo_url}
                          alt=""
                        />
                      </div>
                    );
                  })
                ) : (
                  <div className="flex justify-center items-center">
                    no photos
                  </div>
                )}
              </div>

              {/* Modal Overlay */}
              {isModalOpen && selectedPhoto && (
                <div className=" h-4/5 border w-[75%]  flex justify-center  ">
                  <div className="bg-white flex justify-between p-2 w-full h-full rounded-e-lg  ">
                    <img
                      className=" h-[90%] rounded-2xl  "
                      src={selectedPhoto.photo_url}
                      alt=""
                    />
                    <div className="border flex flex-col">
                      <button
                        className="border rounded-xl px-1"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                      {confirmDelete ? (
                        <button
                          className="border whitespace-nowrap rounded-xl px-1"
                          ref={deleteRef}
                          onClick={handleDelete}
                        >
                          are you sure?
                        </button>
                      ) : (
                        <button
                          className="border rounded-xl px-1"
                          onClick={() => setConfirmDelete(true)}
                        >
                          delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoViewCard;
