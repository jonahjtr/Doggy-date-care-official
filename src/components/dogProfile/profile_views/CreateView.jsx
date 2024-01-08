import React, { useState, useRef } from "react";
import useDeleteAxios from "../../../hooks/axios/useDeleteAxios";
import CreateModal from "../modals/CreateModal";
import FileUpload from "../../forms/FileUpload";
import useClickOutside from "../../../hooks/clickOutside";

const CreateView = ({ photoList, dogId, component, ...props }) => {
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
          title="Photos"
          component={<FileUpload />}
        />
      </div>

      {!component || component == undefined ? (
        <div className="w-full rounded-xl h-4/5 bg-white">no element</div>
      ) : (
        <div className="w-full rounded-xl h-4/5 bg-white">
          {" "}
          {React.cloneElement(component, { ...props })}
        </div>
      )}
    </section>
  );
};

export default CreateView;
